import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone must be at least 10 digits" })
    .max(20, { message: "Phone must be less than 20 characters" })
    .regex(/^[0-9\s\-\+\(\)]+$/, { message: "Invalid phone number format" }),
  institution: z
    .string()
    .trim()
    .min(2, { message: "Institution name is required" })
    .max(100, { message: "Institution name must be less than 100 characters" }),
  eventInterest: z
    .string()
    .min(1, { message: "Please select at least one area of interest" }),
  additionalInfo: z
    .string()
    .trim()
    .max(500, { message: "Additional info must be less than 500 characters" })
    .optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const eventInterest = watch("eventInterest");

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      // Simulate API call - in production, this would save to a database
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "We'll send you a confirmation email shortly.",
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-background">
        <Card className="max-w-md w-full border-primary/20">
          <CardContent className="pt-12 pb-8 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">You're Registered!</h2>
              <p className="text-muted-foreground">
                Thank you for registering for Tech Week 2025. Check your email for confirmation details.
              </p>
            </div>
            <Link to="/">
              <Button variant="hero" className="w-full">
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <Card className="border-border shadow-lg">
          <CardHeader className="space-y-2 border-b border-border bg-muted/50">
            <CardTitle className="text-3xl font-bold">
              Register for{" "}
              <span className="text-primary">Tech Week 2025</span>
            </CardTitle>
            <CardDescription className="text-base">
              Fill out the form below to secure your spot at this year's event.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="João Silva"
                  {...register("fullName")}
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao.silva@email.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  placeholder="+55 (11) 98765-4321"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Institution */}
              <div className="space-y-2">
                <Label htmlFor="institution">
                  Institution/Company <span className="text-primary">*</span>
                </Label>
                <Input
                  id="institution"
                  placeholder="SENAI São Paulo"
                  {...register("institution")}
                  className={errors.institution ? "border-destructive" : ""}
                />
                {errors.institution && (
                  <p className="text-sm text-destructive">{errors.institution.message}</p>
                )}
              </div>

              {/* Event Interest */}
              <div className="space-y-2">
                <Label htmlFor="eventInterest">
                  Primary Interest <span className="text-primary">*</span>
                </Label>
                <Select
                  onValueChange={(value) => setValue("eventInterest", value)}
                  value={eventInterest}
                >
                  <SelectTrigger
                    className={errors.eventInterest ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai">AI & Machine Learning</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                    <SelectItem value="security">Cybersecurity</SelectItem>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="all">All Events</SelectItem>
                  </SelectContent>
                </Select>
                {errors.eventInterest && (
                  <p className="text-sm text-destructive">{errors.eventInterest.message}</p>
                )}
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any questions or special requirements?"
                  rows={4}
                  {...register("additionalInfo")}
                  className={errors.additionalInfo ? "border-destructive" : ""}
                />
                {errors.additionalInfo && (
                  <p className="text-sm text-destructive">
                    {errors.additionalInfo.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By registering, you agree to receive event updates and communications.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;

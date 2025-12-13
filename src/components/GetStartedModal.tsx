import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface GetStartedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetStartedModal = ({ open, onOpenChange }: GetStartedModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    currentEfforts: "",
    sendingCadence: "",
    replyRate: "",
    emailExample: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;

  const handleNext = () => {
    if (step === 1 && !formData.email) {
      toast({ title: "Email is required", variant: "destructive" });
      return;
    }
    if (step === 2 && !formData.currentEfforts) {
      toast({ title: "Please select an option", variant: "destructive" });
      return;
    }
    if (step === 3 && !formData.sendingCadence) {
      toast({ title: "Please select an option", variant: "destructive" });
      return;
    }
    if (step === 4 && !formData.replyRate) {
      toast({ title: "Please select an option", variant: "destructive" });
      return;
    }
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const { error } = await supabase.from('audit_requests').insert({
      email: formData.email,
      current_efforts: formData.currentEfforts,
      sending_cadence: formData.sendingCadence,
      reply_rate: formData.replyRate,
      email_example: formData.emailExample || null,
    });

    if (error) {
      console.error("Error submitting audit request:", error);
      toast({ title: "Error submitting request", description: "Please try again.", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSubmitted(true);
    toast({ title: "Your audit request has been submitted!", description: "We'll be in touch soon." });
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      email: "",
      currentEfforts: "",
      sendingCadence: "",
      replyRate: "",
      emailExample: "",
    });
    setSubmitted(false);
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      resetForm();
    }
    onOpenChange(isOpen);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-heading text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your free audit request has been submitted. We'll analyze your cold email strategy and get back to you within 24-48 hours.
            </p>
            <Button variant="hero" onClick={() => handleClose(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading">Get Your Free Audit</DialogTitle>
          <p className="text-sm text-muted-foreground">Step {step} of {totalSteps}</p>
        </DialogHeader>

        {/* Progress bar */}
        <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="py-4 min-h-[280px]">
          {/* Step 1: Email */}
          {step === 1 && (
            <div className="space-y-4">
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          )}

          {/* Step 2: Current Efforts */}
          {step === 2 && (
            <div className="space-y-4">
              <Label className="text-foreground">How would you characterize your current cold email outreach efforts? *</Label>
              <RadioGroup
                value={formData.currentEfforts}
                onValueChange={(value) => setFormData({ ...formData, currentEfforts: value })}
                className="space-y-3"
              >
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="just-getting-started" id="effort-1" className="mt-0.5" />
                  <Label htmlFor="effort-1" className="cursor-pointer font-normal">No, I'm just getting started</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="poor-results" id="effort-2" className="mt-0.5" />
                  <Label htmlFor="effort-2" className="cursor-pointer font-normal">Yes, but I got poor results (low replies/bookings)</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="some-success" id="effort-3" className="mt-0.5" />
                  <Label htmlFor="effort-3" className="cursor-pointer font-normal">Yes, and I'm currently sending with some success</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="exploring-new" id="effort-4" className="mt-0.5" />
                  <Label htmlFor="effort-4" className="cursor-pointer font-normal">I'm exploring a new cold email strategy or channel</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Sending Cadence */}
          {step === 3 && (
            <div className="space-y-4">
              <Label className="text-foreground">What is your current cold email sending cadence? *</Label>
              <RadioGroup
                value={formData.sendingCadence}
                onValueChange={(value) => setFormData({ ...formData, sendingCadence: value })}
                className="space-y-3"
              >
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="not-sending" id="cadence-1" className="mt-0.5" />
                  <Label htmlFor="cadence-1" className="cursor-pointer font-normal">Not sending yet (planning to start)</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="1-500" id="cadence-2" className="mt-0.5" />
                  <Label htmlFor="cadence-2" className="cursor-pointer font-normal">1-500 emails per day</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="501-plus" id="cadence-3" className="mt-0.5" />
                  <Label htmlFor="cadence-3" className="cursor-pointer font-normal">501+ emails per day</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Reply Rate */}
          {step === 4 && (
            <div className="space-y-4">
              <Label className="text-foreground">What is your current reply rate from cold outreach? *</Label>
              <p className="text-sm text-muted-foreground">(If you don't track this, select the option that best applies)</p>
              <RadioGroup
                value={formData.replyRate}
                onValueChange={(value) => setFormData({ ...formData, replyRate: value })}
                className="space-y-3"
              >
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="havent-sent" id="reply-1" className="mt-0.5" />
                  <Label htmlFor="reply-1" className="cursor-pointer font-normal">Haven't sent emails yet</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="less-than-1" id="reply-2" className="mt-0.5" />
                  <Label htmlFor="reply-2" className="cursor-pointer font-normal">Less than 1% replies</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="1-3" id="reply-3" className="mt-0.5" />
                  <Label htmlFor="reply-3" className="cursor-pointer font-normal">1-3% replies</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="dont-track" id="reply-4" className="mt-0.5" />
                  <Label htmlFor="reply-4" className="cursor-pointer font-normal">Don't track/Not sure</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 5: Email Example */}
          {step === 5 && (
            <div className="space-y-4">
              <Label htmlFor="emailExample" className="text-foreground">
                Paste ONE example of a cold email you've sent (or plan to send):
              </Label>
              <p className="text-xs text-muted-foreground">Be clear for best results</p>
              <Textarea
                id="emailExample"
                placeholder="Subject: [Your subject line]

Hi [Name],

[Your email body...]

Best,
[Your name]"
                value={formData.emailExample}
                onChange={(e) => setFormData({ ...formData, emailExample: e.target.value })}
                className="min-h-[180px]"
              />
              <div className="bg-secondary/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Why this matters:</strong> This provides 100% potential value to audit: Template structure, Personalization level, Value proposition clarity, CTA type, Length/readability, Proof/credibility, Tone
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between pt-4 border-t border-border">
          {step > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          ) : (
            <div />
          )}
          
          {step < totalSteps ? (
            <Button variant="hero" onClick={handleNext}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button variant="hero" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Get My Free Audit"}
              {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;

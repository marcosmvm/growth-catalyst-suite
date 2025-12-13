import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  // Replace this URL with your actual Calendly link
  const calendlyUrl = "https://calendly.com/your-calendly-link";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-heading">Schedule a Demo</DialogTitle>
        </DialogHeader>
        <div className="flex-1 h-full pb-6 px-6">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a demo"
            className="rounded-lg"
            style={{ minHeight: "500px" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;

-- Create audit_requests table
CREATE TABLE public.audit_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  current_efforts TEXT NOT NULL,
  sending_cadence TEXT NOT NULL,
  reply_rate TEXT NOT NULL,
  email_example TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.audit_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit audit requests"
ON public.audit_requests
FOR INSERT
WITH CHECK (true);

-- Only admins can view all audit requests
CREATE POLICY "Admins can view all audit requests"
ON public.audit_requests
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

-- Only admins can update audit requests
CREATE POLICY "Admins can update audit requests"
ON public.audit_requests
FOR UPDATE
USING (has_role(auth.uid(), 'admin'));

-- Only admins can delete audit requests
CREATE POLICY "Admins can delete audit requests"
ON public.audit_requests
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- Add trigger for updated_at
CREATE TRIGGER update_audit_requests_updated_at
BEFORE UPDATE ON public.audit_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
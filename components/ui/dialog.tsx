"use client";
import { Dialog as HeadlessDialog } from "@headlessui/react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, children, className = "" }: DialogProps) {
  return (
    <HeadlessDialog 
      open={open} 
      onClose={onOpenChange} 
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${className}`}
    >
      {children}
    </HeadlessDialog>
  );
}

export function DialogContent({ children, className = "" }: DialogContentProps) {
  return <div className={`bg-white rounded shadow-lg ${className}`}>{children}</div>;
}

export function DialogHeader({ children, className = "" }: DialogHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }: DialogTitleProps) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}

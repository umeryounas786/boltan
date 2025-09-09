
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { AlertTriangle, ArrowRight, CheckCircle, CreditCard, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServiceDetailModal({ service, isOpen, onOpenChange }) {
  const { toast } = useToast();

  if (!service) return null;

  const handleNotImplemented = () => {
    toast({
        title: "🚧 Feature in Progress",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        variant: "destructive",
        icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
    });
  };

  const isLightThemeActive = document.body.classList.contains('light-theme-active');
  
  const dialogContentClassName = isLightThemeActive 
    ? 'service-detail-modal-content' 
    : 'bg-slate-900 border-slate-700 text-white';

  const descriptionColor = isLightThemeActive ? 'text-brand-gray-medium' : 'text-slate-300';
  const serviceInfoTitleColor = isLightThemeActive ? 'text-red-500' : 'text-red-300';

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={`${dialogContentClassName} sm:max-w-xl max-h-[90vh] overflow-y-auto p-0`}>
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6 text-center">
            <div className={`w-20 h-20 ${service.isComingSoon ? 'bg-yellow-500/10' : 'bg-red-500/10'} rounded-lg flex items-center justify-center mb-4 mx-auto ${service.isComingSoon ? 'text-yellow-300 ring-yellow-500/30' : 'text-red-300 ring-red-500/30'} ring-1`}>
              {React.cloneElement(service.icon, { className: "w-10 h-10" })}
            </div>
            <DialogTitle className={`text-3xl font-bold ${isLightThemeActive ? 'dialog-title' : 'text-red-400'}`}>{service.title}</DialogTitle>
            <DialogDescription className={`${descriptionColor} text-base leading-relaxed pt-2`}>
              {service.description}
            </DialogDescription>
          </DialogHeader>
          
          {service.details && (
              <div className={`mt-4 mb-8 ${descriptionColor} text-base space-y-2 text-center`}>
                  <h4 className={`font-semibold text-lg ${serviceInfoTitleColor}`}>More Information</h4>
                  <p>{service.details}</p>
              </div>
          )}

          {service.isComingSoon ? (
            <div className="mt-auto pt-6">
              <p className={`text-center font-semibold p-4 rounded-md ${isLightThemeActive ? 'text-yellow-700 bg-yellow-100 border border-yellow-300' : 'text-yellow-400 bg-yellow-500/10 border border-yellow-500/30'}`}>
                This service is launching soon! Booking will be available shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <h3 className={`text-xl font-semibold text-center ${isLightThemeActive ? 'text-brand-black-text' : 'text-white'}`}>Ready to book?</h3>
                <Button asChild className="w-full primary-cta !text-lg !py-3">
                  <Link to="/book-appointment" onClick={() => onOpenChange(false)}>
                    <CreditCard className="w-5 h-5 mr-3" />
                    Book & Pay Online
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full secondary-cta !text-lg !py-3">
                  <Link to="/contact" onClick={() => onOpenChange(false)}>
                    <Phone className="w-5 h-5 mr-3" />
                    Contact to Book
                  </Link>
                </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

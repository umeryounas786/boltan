import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Mail, Phone, MapPin } from 'lucide-react';

export default function BookingSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can verify the session here if needed
    if (sessionId) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <>
      <Helmet>
        <title>Booking Confirmed - Emergency Dental Care Manchester</title>
        <meta name="description" content="Your emergency dental appointment has been confirmed. We'll contact you shortly with appointment details." />
      </Helmet>
      <div className="page-background-light">
        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black page-main-title mb-4">
                Booking Confirmed!
              </h1>
              
              <p className="text-xl page-subtitle mb-8">
                Thank you for booking with us. Your payment has been processed successfully.
              </p>

              <div className="glass-effect p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-green-500 mb-8 text-left">
                <h2 className="text-2xl font-bold section-title mb-6">What Happens Next?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-green-500/10 p-2 rounded-full mt-1">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold card-title">Email Confirmation</h3>
                      <p className="card-description">
                        You'll receive an email confirmation shortly with your appointment details, including the time, date, and our clinic address.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-blue-500/10 p-2 rounded-full mt-1">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold card-title">We'll Contact You</h3>
                      <p className="card-description">
                        Our team will call you within the next few hours to confirm your preferred appointment time and answer any questions you may have.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-yellow-500/10 p-2 rounded-full mt-1">
                      <Calendar className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold card-title">Same-Day Appointments</h3>
                      <p className="card-description">
                        We prioritize urgent cases and will do our best to see you on the same day, often within a few hours of your booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-red-800">
                  <strong>Emergency?</strong> If you're experiencing severe pain or a life-threatening emergency, please call us immediately at{' '}
                  <a href="tel:07375064619" className="font-bold underline">07375064619</a> or dial 999.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="primary-cta">
                  <Link to="/">
                    Return to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" className="secondary-cta">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>

              {sessionId && (
                <p className="text-xs text-brand-gray-medium mt-6">
                  Session ID: {sessionId}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}


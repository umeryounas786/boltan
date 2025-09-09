
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import { PageLoader } from '@/components/PageLoader';

const HomePage = React.lazy(() => import('@/pages/HomePage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));
const ServicesPage = React.lazy(() => import('@/pages/ServicesPage'));
const BlogPage = React.lazy(() => import('@/pages/BlogPage'));
const PricingPage = React.lazy(() => import('@/pages/PricingPage'));
const BookingPage = React.lazy(() => import('@/pages/BookingPage'));
const BlogPostLayout = React.lazy(() => import('@/components/BlogPostLayout'));

// Existing Blog Posts
const DigitalSmileDesignPost = React.lazy(() => import('@/pages/blog/DigitalSmileDesignPost'));
const TeledentistryPost = React.lazy(() => import('@/pages/blog/TeledentistryPost'));
const PediatricEmergenciesPost = React.lazy(() => import('@/pages/blog/PediatricEmergenciesPost'));
const SedationDentistryPost = React.lazy(() => import('@/pages/blog/SedationDentistryPost'));
const SameDayAppointmentPost = React.lazy(() => import('@/pages/blog/SameDayAppointmentPost'));
const BrokenToothPost = React.lazy(() => import('@/pages/blog/BrokenToothPost'));
const LostFillingPost = React.lazy(() => import('@/pages/blog/LostFillingPost'));
const DentistVsAEPost = React.lazy(() => import('@/pages/blog/DentistVsAEPost'));
const RadcliffeDentistPost = React.lazy(() => import('@/pages/blog/RadcliffeDentistPost'));
const WisdomToothPost = React.lazy(() => import('@/pages/blog/WisdomToothPost'));
const RootCanalPost = React.lazy(() => import('@/pages/blog/RootCanalPost'));
const DentalAbscessPost = React.lazy(() => import('@/pages/blog/DentalAbscessPost'));
const BrokenDenturePost = React.lazy(() => import('@/pages/blog/BrokenDenturePost'));
const TemporaryCrownPost = React.lazy(() => import('@/pages/blog/TemporaryCrownPost'));
const ChildChippedToothPost = React.lazy(() => import('@/pages/blog/ChildChippedToothPost'));
const NeverIgnoreEmergenciesPost = React.lazy(() => import('@/pages/blog/NeverIgnoreEmergenciesPost'));
const FixLostFillingPost = React.lazy(() => import('@/pages/blog/FixLostFillingPost'));
const EmergencyExtractionPost = React.lazy(() => import('@/pages/blog/EmergencyExtractionPost'));
const VirtualConsultationPost = React.lazy(() => import('@/pages/blog/VirtualConsultationPost'));
const DentalAnxietyPost = React.lazy(() => import('@/pages/blog/DentalAnxietyPost'));
const WeekendToothPainPost = React.lazy(() => import('@/pages/blog/WeekendToothPainPost'));
const DsdEmergencyRepairPost = React.lazy(() => import('@/pages/blog/DsdEmergencyRepairPost'));
const UrgentVsRoutineCarePost = React.lazy(() => import('@/pages/blog/UrgentVsRoutineCarePost'));
const AfterHoursPainPost = React.lazy(() => import('@/pages/blog/AfterHoursPainPost'));
const PediatricAbscessPost = React.lazy(() => import('@/pages/blog/PediatricAbscessPost'));
const TouristDentalInfoPost = React.lazy(() => import('@/pages/blog/TouristDentalInfoPost'));
const BoltonRadcliffeAppointmentPost = React.lazy(() => import('@/pages/blog/BoltonRadcliffeAppointmentPost'));
const SeniorEmergencyCarePost = React.lazy(() => import('@/pages/blog/SeniorEmergencyCarePost'));
const BuryEmergencyVisitPost = React.lazy(() => import('@/pages/blog/BuryEmergencyVisitPost'));
const EmergencyDentalCostPost = React.lazy(() => import('@/pages/blog/EmergencyDentalCostPost'));
const EmergencyGuidePost = React.lazy(() => import('@/pages/blog/EmergencyGuidePost'));

// New Blog Posts - Cluster 1
const WhenToCallEmergencyDentistPost = React.lazy(() => import('@/pages/blog/WhenToCallEmergencyDentistPost'));
const SameDayDentistGuidePost = React.lazy(() => import('@/pages/blog/SameDayDentistGuidePost'));
const GetEmergencyTreatmentPost = React.lazy(() => import('@/pages/blog/GetEmergencyTreatmentPost'));

// New Blog Posts - Cluster 2 (Toothache)
const WhatToDoSevereToothachePost = React.lazy(() => import('@/pages/blog/WhatToDoSevereToothachePost'));
const TopCausesToothPainPost = React.lazy(() => import('@/pages/blog/TopCausesToothPainPost'));
const HowFastEmergencyDentistPost = React.lazy(() => import('@/pages/blog/HowFastEmergencyDentistPost'));

// New Blog Posts - Cluster 3 (Broken Teeth)
const HandleBrokenKnockedOutToothPost = React.lazy(() => import('@/pages/blog/HandleBrokenKnockedOutToothPost'));
const LostFillingOrCrownPost = React.lazy(() => import('@/pages/blog/LostFillingOrCrownPost'));
const DamagedFrontTeethSolutionsPost = React.lazy(() => import('@/pages/blog/DamagedFrontTeethSolutionsPost'));

// New Blog Posts - Cluster 4 (Infection & Abscess)
const DentalAbscessEmergencyTreatmentPost = React.lazy(() => import('@/pages/blog/DentalAbscessEmergencyTreatmentPost'));
const RootCanalEmergencyPost = React.lazy(() => import('@/pages/blog/RootCanalEmergencyPost'));
const FacialSwellingToothInfectionPost = React.lazy(() => import('@/pages/blog/FacialSwellingToothInfectionPost'));

// New Blog Posts - Cluster 5 (Wisdom Teeth)
const EmergencyWisdomToothRemovalPost = React.lazy(() => import('@/pages/blog/EmergencyWisdomToothRemovalPost'));
const ManageWisdomToothPainPost = React.lazy(() => import('@/pages/blog/ManageWisdomToothPainPost'));

// New Blog Posts - Cluster 6 (Sedation)
const EasingAnxietyWithSedationPost = React.lazy(() => import('@/pages/blog/EasingAnxietyWithSedationPost'));
const TypesOfSedationPost = React.lazy(() => import('@/pages/blog/TypesOfSedationPost'));
const SedationGameChangerPost = React.lazy(() => import('@/pages/blog/SedationGameChangerPost'));

// New Blog Posts - Cluster 7 (Children's Emergencies)
const WhatToDoIfChildKnocksOutToothPost = React.lazy(() => import('@/pages/blog/WhatToDoIfChildKnocksOutToothPost'));
const PediatricDentalEmergenciesFastActionPost = React.lazy(() => import('@/pages/blog/PediatricDentalEmergenciesFastActionPost'));
const SportsMouthguardsForKidsPost = React.lazy(() => import('@/pages/blog/SportsMouthguardsForKidsPost'));

// New Blog Posts - Cluster 8 (Teledentistry)
const HowTeledentistryWorksPost = React.lazy(() => import('@/pages/blog/HowTeledentistryWorksPost'));
const WhenToUseVirtualDentalAdvicePost = React.lazy(() => import('@/pages/blog/WhenToUseVirtualDentalAdvicePost'));


function App() {
  React.useEffect(() => {
    document.body.classList.add('light-theme-active'); 
    return () => {
      document.body.classList.remove('light-theme-active');
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="book-appointment" element={<BookingPage />} />
            
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/digital-smile-design" element={<BlogPostLayout><DigitalSmileDesignPost /></BlogPostLayout>} />
            <Route path="blog/emergency-teledentistry" element={<BlogPostLayout><TeledentistryPost /></BlogPostLayout>} />
            <Route path="blog/pediatric-dental-emergencies" element={<BlogPostLayout><PediatricEmergenciesPost /></BlogPostLayout>} />
            <Route path="blog/in-clinic-sedation" element={<BlogPostLayout><SedationDentistryPost /></BlogPostLayout>} />
            <Route path="blog/same-day-emergency-appointment" element={<BlogPostLayout><SameDayAppointmentPost /></BlogPostLayout>} />
            <Route path="blog/broken-chipped-tooth-repair" element={<BlogPostLayout><BrokenToothPost /></BlogPostLayout>} />
            <Route path="blog/lost-filling-crown-guide" element={<BlogPostLayout><LostFillingPost /></BlogPostLayout>} />
            <Route path="blog/dentist-vs-ae-for-tooth-pain" element={<BlogPostLayout><DentistVsAEPost /></BlogPostLayout>} />
            <Route path="blog/emergency-dentist-radcliffe" element={<BlogPostLayout><RadcliffeDentistPost /></BlogPostLayout>} />
            <Route path="blog/wisdom-tooth-pain-relief" element={<BlogPostLayout><WisdomToothPost /></BlogPostLayout>} />
            <Route path="blog/emergency-root-canal-bolton" element={<BlogPostLayout><RootCanalPost /></BlogPostLayout>} />
            <Route path="blog/dental-abscess-guide" element={<BlogPostLayout><DentalAbscessPost /></BlogPostLayout>} />
            <Route path="blog/broken-denture-repair-manchester" element={<BlogPostLayout><BrokenDenturePost /></BlogPostLayout>} />
            <Route path="blog/temporary-crown-emergency-manchester" element={<BlogPostLayout><TemporaryCrownPost /></BlogPostLayout>} />
            <Route path="blog/child-chipped-tooth-emergency" element={<BlogPostLayout><ChildChippedToothPost /></BlogPostLayout>} />
            <Route path="blog/dental-emergencies-never-ignore" element={<BlogPostLayout><NeverIgnoreEmergenciesPost /></BlogPostLayout>} />
            <Route path="blog/fix-lost-filling-at-home" element={<BlogPostLayout><FixLostFillingPost /></BlogPostLayout>} />
            <Route path="blog/emergency-tooth-extraction-bolton" element={<BlogPostLayout><EmergencyExtractionPost /></BlogPostLayout>} />
            <Route path="blog/virtual-emergency-dental-consultation" element={<BlogPostLayout><VirtualConsultationPost /></BlogPostLayout>} />
            <Route path="blog/dental-anxiety-sedation-options" element={<BlogPostLayout><DentalAnxietyPost /></BlogPostLayout>} />
            <Route path="blog/weekend-tooth-pain-manchester" element={<BlogPostLayout><WeekendToothPainPost /></BlogPostLayout>} />
            <Route path="blog/dsd-emergency-cosmetic-repairs" element={<BlogPostLayout><DsdEmergencyRepairPost /></BlogPostLayout>} />
            <Route path="blog/urgent-vs-routine-dental-care" element={<BlogPostLayout><UrgentVsRoutineCarePost /></BlogPostLayout>} />
            <Route path="blog/24-hour-emergency-dental-tips-manchester" element={<BlogPostLayout><AfterHoursPainPost /></BlogPostLayout>} />
            <Route path="blog/pediatric-dental-abscess-bolton-bury" element={<BlogPostLayout><PediatricAbscessPost /></BlogPostLayout>} />
            <Route path="blog/emergency-dental-services-for-tourists-manchester" element={<BlogPostLayout><TouristDentalInfoPost /></BlogPostLayout>} />
            <Route path="blog/dentist-appointment-today-bolton-radcliffe" element={<BlogPostLayout><BoltonRadcliffeAppointmentPost /></BlogPostLayout>} />
            <Route path="blog/emergency-dental-care-for-seniors" element={<BlogPostLayout><SeniorEmergencyCarePost /></BlogPostLayout>} />
            <Route path="blog/what-to-expect-emergency-dentist-visit-bury" element={<BlogPostLayout><BuryEmergencyVisitPost /></BlogPostLayout>} />
            <Route path="blog/emergency-dental-costs-uk" element={<BlogPostLayout><EmergencyDentalCostPost /></BlogPostLayout>} />
            <Route path="blog/guide-to-dental-emergencies" element={<BlogPostLayout><EmergencyGuidePost /></BlogPostLayout>} />
            <Route path="blog/when-to-call-an-emergency-dentist" element={<BlogPostLayout><WhenToCallEmergencyDentistPost /></BlogPostLayout>} />
            <Route path="blog/guide-to-same-day-dentist-manchester-bolton" element={<BlogPostLayout><SameDayDentistGuidePost /></BlogPostLayout>} />
            <Route path="blog/get-emergency-dental-treatment-without-delays" element={<BlogPostLayout><GetEmergencyTreatmentPost /></BlogPostLayout>} />
            <Route path="blog/what-to-do-severe-toothache" element={<BlogPostLayout><WhatToDoSevereToothachePost /></BlogPostLayout>} />
            <Route path="blog/top-causes-of-tooth-pain" element={<BlogPostLayout><TopCausesToothPainPost /></BlogPostLayout>} />
            <Route path="blog/how-fast-can-emergency-dentist-stop-toothache" element={<BlogPostLayout><HowFastEmergencyDentistPost /></BlogPostLayout>} />
            <Route path="blog/how-to-handle-broken-knocked-out-tooth" element={<BlogPostLayout><HandleBrokenKnockedOutToothPost /></BlogPostLayout>} />
            <Route path="blog/lost-filling-or-crown-what-to-do" element={<BlogPostLayout><LostFillingOrCrownPost /></BlogPostLayout>} />
            <Route path="blog/emergency-solutions-for-damaged-front-teeth" element={<BlogPostLayout><DamagedFrontTeethSolutionsPost /></BlogPostLayout>} />
            <Route path="blog/dental-abscess-why-true-emergency" element={<BlogPostLayout><DentalAbscessEmergencyTreatmentPost /></BlogPostLayout>} />
            <Route path="blog/root-canal-in-emergency-saving-tooth" element={<BlogPostLayout><RootCanalEmergencyPost /></BlogPostLayout>} />
            <Route path="blog/facial-swelling-tooth-infection" element={<BlogPostLayout><FacialSwellingToothInfectionPost /></BlogPostLayout>} />
            <Route path="blog/emergency-wisdom-tooth-removal" element={<BlogPostLayout><EmergencyWisdomToothRemovalPost /></BlogPostLayout>} />
            <Route path="blog/manage-wisdom-tooth-pain" element={<BlogPostLayout><ManageWisdomToothPainPost /></BlogPostLayout>} />
            <Route path="blog/easing-anxiety-with-sedation" element={<BlogPostLayout><EasingAnxietyWithSedationPost /></BlogPostLayout>} />
            <Route path="blog/types-of-sedation-in-emergency-dentistry" element={<BlogPostLayout><TypesOfSedationPost /></BlogPostLayout>} />
            <Route path="blog/sedation-dentistry-game-changer" element={<BlogPostLayout><SedationGameChangerPost /></BlogPostLayout>} />
            <Route path="blog/what-to-do-if-child-knocks-out-tooth" element={<BlogPostLayout><WhatToDoIfChildKnocksOutToothPost /></BlogPostLayout>} />
            <Route path="blog/pediatric-dental-emergencies-fast-action" element={<BlogPostLayout><PediatricDentalEmergenciesFastActionPost /></BlogPostLayout>} />
            <Route path="blog/sports-mouthguards-for-kids" element={<BlogPostLayout><SportsMouthguardsForKidsPost /></BlogPostLayout>} />
            <Route path="blog/how-emergency-teledentistry-works-manchester" element={<BlogPostLayout><HowTeledentistryWorksPost /></BlogPostLayout>} />
            <Route path="blog/when-to-use-virtual-dental-advice" element={<BlogPostLayout><WhenToUseVirtualDentalAdvicePost /></BlogPostLayout>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

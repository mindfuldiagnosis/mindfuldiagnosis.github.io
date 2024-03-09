"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TeamCard } from "./_components/teamCards";
import { useState, useEffect } from 'react';
import { Mails, Linkedin, Instagram} from "lucide-react";

const ProductLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-orange-300">
      <main className="text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 pt-20">
          Mindful Diagnosis
        </h1>
        <p className="text-lg md:text-lg text-gray-700 mb-6 italic font-bold">
          TRANSFORMING MEDICAL BIAS EDUCATION, ONE MIND AT A TIME
        </p>
        <p className="text-orange-800 rounded-full py-1 px-4 mb-6 flex items-center justify-center  text-lg md:text-lg font-bold italic">
          Sign up below for exclusive access
        </p>
        <Link target="_blank" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLScfWRRZTdL-0qc2dtFRclXmjilma96y2hVR7h8JlQrw0ijA2w/viewform?usp=send_form">
          <Button
            size="lg"
            variant="ghost"
            className="border-2 border-black hover:bg-orange-200 py-2 md:py-3 px-4 md:px-6 rounded-md text-lg md:text-3xl"
          >
            <div className="text-black">Sign Up</div>
          </Button>
        </Link>
        <div className="flex justify-center items-center mt-6 md:mt-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 md:w-48 h-24 md:h-48 object-contain"
          />
        </div>
        {/* Other content sections */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-bold mb-6 italic">Watch Our Pitch</h2>
          
          <div className="flex flex-col space-y-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Learn about our product by watching our pitch below!
              </p>
            </div>
            {/* Repeat the above structure for other sections */}
          </div>
          <div className="w-full md:w-3/4 mx-auto mb-8">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/VWrgPNY8TFU?si=KYSNEYv-oi_GnffG"
              title="Embedded Video"
              allowFullScreen
              className="rounded-3xl"
            ></iframe>
          </div>
        </div>
        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mt-12 mb-6 italic">Meet The Team</h2>
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Click on a card to learn more about a team member!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Executive Team */}
            <div>
              <p className="text-xl font-bold mb-4">Executive Team</p>
              <div className=" flex-col space-y-4">
                <TeamCard
                  name="Meera Rajeev"
                  position="CEO"
                  imageSrc="/Meera.jpg"
                  description="Meet Meera, a determined third-year biomedical science major at The Ohio State University, aspiring to become a physician. Alongside her academic pursuits, she spends her free time binge-reading captivating books and helping train service dogs. As Chief Executive Officer, Meera leads the development of our innovative implicit bias training program and oversees outreach efforts for Mindful Diagnosis. Her personal experience with healthcare disparities as a person of color drives her mission to implement effective change. Through this non-profit, she aims to transform the lives of countless patients through enhanced implicit-bias awareness and equitable medical education."
                />
                <TeamCard
                  name="Vraj Shah"
                  position="CTO"
                  imageSrc="/vraj.png"
                  description="Meet Vraj, a junior at The Ohio State University, majoring in Computer Science & Engineering. Beyond academia, Vraj enjoys cooking and playing the piano. Vraj leads our programming team, skillfully deploying cutting-edge systems for Mindful Diagnosis. Vraj's vision for the future of the company is to witness Mindful Diagnosis become the foremost tool adopted by medical institutions to combat implicit bias."
                />
                <TeamCard
                  name="Mohini Parvate"
                  position="COO"
                  imageSrc="/Mohini.jpeg"
                  description="Introducing Mohini, a third year public health major from The Ohio State University. Mohini enjoys spending time listening to music and being outside playing frisbee and running. As the Chief Operating Officer, Mohini handles all nonprofit filings and paperwork for Mindful Diagnosis. Mohini hopes that Mindful Diagnosis will be able to make a major impact on the healthcare field by providing engaging information about implicit bias and medical diversity education."
                />
              </div>
            </div>
            {/* Networking Team */}
            <div>
              <p className="text-xl font-bold mb-4">Networking Team</p>
              <div className="flex flex-col space-y-4">
                <TeamCard
                    name="Rohan Desarapu"
                    position="Director Of Outreach"
                    imageSrc="/Rohan.JPEG"
                    description="Introducing Rohan, a fourth year at the University of Cincinnati specializing in Medical Sciences. Beyond their professional pursuits, Rohan enjoys cooking, playing sports and listening to music. As Director of Outreach, Rohan takes charge of reaching out to leaders in implicit bias research and seeking out opportunities to collaborate with health systems and medical schools. Rohan hopes that Mindful Diagnosis addresses the impact of implicit bias throughout the healthcare system to ultimately improve patient outcomes and experiences."
                />
                <TeamCard
                    name="Archit Deshpande"
                    position="Networking Coordinator"
                    imageSrc="/archit.jpg"
                    description="Introducing Archit Deshpande a 4th year premedical undergraduate student at the University of Cincinnati, specializing in Neuroscience with minors in chemistry and public health. He hopes to become a physician in the Emergency Medicine field. Beyond professional pursuits Archit finds joy in watching sports as well as volunteering in the community. In his role at Mindful Diagnosis Archit hopes to outreach to different schools to bring Mindful Diagnosis to a wider audience helping to reduce implicit bias throughout healthcare."
                />
                <TeamCard
                    name="Sai Ashish Bommasani"
                    position="Design Developer"
                    imageSrc="/Ashish.jpeg"
                    description="Introducing Ashish, a fourth year at the University of Cincinnati specializing in microbiology. Beyond their professional pursuits, Ashish enjoys reading, exercising, and gaming. As the Design Developer, Ashish aids in updating and designing new Mindful Diagnosis technology and researching the many different topics involved in our Learning Modules. Ashish`s vision for Mindful Diagnosis is to help propel old and biased healthcare systems into new and stratified systems that benefit everyone."
                />
                <TeamCard
                    name="Nikhitha Vellanki"
                    position="Outreach Officer"
                    imageSrc="Nikhitha.jpeg"
                    description="Introducing Nikhitha, a fourth year at a the Ohio State University studying neuroscience with a specialization in behavioral sciences. Apart from school and work, Nikhitha enjoys cooking, shopping, and spending time with loved ones. As the Outreach Officer, Nikhitha implements strategies to promote Mindful Diagnosis in the healthcare industry. Nikhitha hopes to see Mindful Diagnosis in action and help combats implicit bias."
                />
              </div>
            </div>
            {/* Financial & Creative Team */}
            <div>
              <p className="text-xl font-bold mb-4">
                Creative Team
              </p>
              <div className="flex flex-col space-y-4">
                <TeamCard
                    name="Ishani Roy Chowdhury"
                    position="Fundraising Coordinator"
                    imageSrc="/Ishani.JPEG"
                    description="Introducing Ishani, a third year at the University of Cincinnati, specializing in Business Analytics and Information Systems. Beyond their professional pursuits, Ishani finds joy in painting, crochet, and building legos. As the Fundraising Coordinator, Ishani takes charge of handling the restaurants and GoFundMe fundraisings of Mindful Diagnosis. Their vision for the future is to see Mindful Diagnosis out in the world and bringing awareness to the impact of implicit bias."
                />
                <TeamCard
                    name="Rishi Rathan"
                    position="Grants Coordinator"
                    imageSrc="/Rishi.JPEG"
                    description="Introducing Rishi, a Junior at The Ohio state University , specializing in Finance. Beyond their professional pursuits, Rishi finds joy in exploring new places and restaurants. As the grants coordinator for grants and funding, Rishi takes charge of finding new ways of getting funds as well as managing them. Rishi hopes that mindful diagnosis could teach the modern health care about the importance of implicit bias, and hopes to see them apply it."
                />
                <TeamCard
                    name="Sneham Patel"
                    position="Media Curator"
                    imageSrc="/Sneham.jpeg"
                    description="Introducing Sneham, a third year at the University of Cincinnati, specializing in Biomedical Studies. Beyond their professional pursuits, Sneham finds joy in playing golf, watching baseball and taking pictures. As the media curator, Sneham produces media for the public to see from Mindful Diagnosis. Their vision for the future is to witness change in the field of public health in relation to minorities leading the way in medicine, making a significant impact on public health as well as diversity inclusion."
                />
                <TeamCard
                    name="Shrea Kumar"
                    position="Social Media Manager"
                    imageSrc="/Shrea.jpeg"
                    description="Introducing Shrea, a fourth year at The Ohio State University specializing in health sciences . Beyond their professional pursuits, Shrea finds joy in lifting, cooking, and shopping. As Social Media Manager, Shrea designs and plans posts for Mindful Diagnosis social media platforms. Shrea hopes to see Mindful Diagnosis raise awareness of implicit bias on a macro level in the healthcare field."
                />
              </div>
            </div>
            {/* Technology Team */}
            <div>
              <p className="text-xl font-bold mb-4">Technology Team</p>
              <div className="flex flex-col space-y-5">
                <TeamCard
                    name="Ayyoub Abdel-Aziz"
                    position="Senior Programmer"
                    imageSrc="/Ayyoub.jpg"
                    description="Introducing Ayyoub, a Junior at Ohio State, specializing in Computer Science. Ayyoub finds joy in reading and spending time with others in his free time. As a senior programmer, Ayyoub takes charge of bringing and implementing new technology to MD. His vision for the future is to witness Mindful Diagnosis properly mitigate implicit bias by correcting it early in a medical professional`s career."
                />
                <TeamCard
                    name="Nafees Sathik"
                    position="Junior Programmer"
                    imageSrc="/nafees.jpg"
                    description="Introducing Nafees Sathik, a Senior at The Ohio State University, specializing in Neuroscience, minoring in Computer Information Sciences. Beyond his professional pursuits, Nafees finds joy in cars and loves to learn from the car community. In his role at Mindful Diagnosis, Nafees will be assisting with Vraj and Ayyoub programming the database, website and apps as a junior programmer. His vision for the future is to witness Mindful Diagnosis, leading the way in patient care, making a significant impact on ensuring proper diagnosis, leading to limited drug usage and a greater turn to a holistic view of medicine to include diet, exercise and sleep."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl font-bold mb-1 italic">Read Our Message</h2>
              <div>
                <Link href="https://www.gofundme.com/f/donate-to-mindful-diagnosis" target="_blank">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="border-2 border-black hover:bg-orange-200 py-3 md:py-3 px-4 md:px-6 mb-4 rounded-md text-lg md:text-3xl"
                  >
                    <div className="text-black">Donate</div>
                  </Button>
                </Link>
                <p className="text-xl text-gray-800 mb-10 italic">
                  By donating, through the GoFundMe button above, you are directly investing in creating a more equitable and inclusive healthcare system. Your support will enable medical professionals to gain a deeper understanding of their biases, leading to improved patient care and better treatment outcomes for diverse communities. With your generous contribution, we can expand the reach of this vital software, empowering more healthcare facilities to foster an environment of compassion and fairness. Your donation, no matter the amount, will be a catalyst for positive change and drive a meaningful shift towards eliminating healthcare disparities. Together, let's advance towards a future where everyone receives the respect, understanding, and care they deserve. Join us in this crucial mission and be a driving force behind a more compassionate and unbiased healthcare landscape. Thank you for being part of this transformative journey.
                </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl font-bold mb-1 italic">Contact Us</h2>
              <div className="flex flex-col space-y-8 pb-10">
                <div className="md:text-2xl text-md flex items-center justify-center">
                    <Mails className="h-7 item-center justify-center w-7  mr-2"/>
                    contact.mindfuldiagnosis@gmail.com
                </div>
                <div className="md:text-2xl text-md flex items-center justify-center">
                    <Instagram className="h-7 item-center justify-center w-7 mr-2"/>
                    @mindful_diagnosis
                </div>
                <div className="md:text-2xl text-md flex items-center justify-center">
                    <Linkedin className="h-7 item-center justify-center w-7 mr-2"/>
                    linkedin.com/company/mindfuldiagnosis
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductLayout;

"use client";

import ConsumerCard from "@/components/consumer-card";

export default function ConsumerSection() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-[1200px] mx-auto">
        <ConsumerCard
          title="AI Consumer Verticals"
          content="Entrova adopts consumer behavioral data to build tailored applications, using artificial intelligence to enhance personalization. These solutions effectively improve efficiency and user satisfaction, facilitating the intelligent transformation across various consumer sectors."
          image="ai-consumer-verticals.png"
        />
        <ConsumerCard
          title="Gaming"
          content="2D/3D Asset Generation AI NPC Dialogue"
          image="gaming.png"
          variant="fusion"
          fragment="gaming"
        />
        <ConsumerCard
          title="Health and Wellness"
          content="Health and Fitness Tracker Wellness and Workout Al Coach"
          image="health-and-wellness.png"
          variant="fusion"
          fragment="health"
        />
        <ConsumerCard
          title="Entertainment"
          content="Al Content Recommendations Personalized Playlists"
          image="entertainment.png"
          variant="fusion"
          fragment="entertainment"
        />
        <ConsumerCard
          title="Fashion"
          content="Personal Stylist Trend and Event Integration"
          image="fashion.png"
          variant="fusion"
          fragment="fashion"
        />
        <ConsumerCard
          title="Travel"
          content="Vacation and Travel Planning Al-Generated Local Experiences"
          image="travel.png"
          variant="fusion"
          fragment="travel"
        />
        <ConsumerCard
          title="Education"
          content="Al Conversational Tutors Al-Driven Analytics and Feedback"
          image="education.png"
          variant="fusion"
          fragment="education"
        />
      </div>
    </section>
  );
}

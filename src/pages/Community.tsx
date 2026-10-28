import React from 'react';
import { motion } from 'motion/react';
import { CommunityHero } from '../components/community/CommunityHero';
import { FeaturedCreators } from '../components/community/FeaturedCreators';
import { CreativeFeed } from '../components/community/CreativeFeed';
import { LearningHub } from '../components/community/LearningHub';
import { Workshops } from '../components/community/Workshops';
import { Challenges } from '../components/community/Challenges';
import { Insights } from '../components/community/Insights';
import { Discussion } from '../components/community/Discussion';
import { CommunityFAB } from '../components/community/CommunityFAB';
import { PersonalDashboard } from '../components/community/PersonalDashboard';
import { AIRecommendations } from '../components/community/AIRecommendations';
import { SEOHead } from '../components/seo/SEOHead';
import { RelatedContent } from '../components/seo/RelatedContent';
import { AdUnit } from '../components/ads/AdUnit';
import { buildBreadcrumbSchema } from '../lib/seo/schemaGenerator';

export default function Community() {
  return (
    <div className="bg-primary min-h-screen">
      <SEOHead
        title="Floral Creator Community & Masterclasses | OpalSphere"
        description="Join OpalSphere's international community of artisan florists, botanical designers, masterclasses, and creative workshops."
        canonicalUrl="https://maxcnfront.vercel.app/community"
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Community', url: '/community' },
        ])}
      />
      <CommunityHero />
      <PersonalDashboard />
      <AIRecommendations />
      <FeaturedCreators />
      <CreativeFeed />
      <LearningHub />
      <Workshops />

      {/* Google AdSense Isolated Editorial Placement */}
      <AdUnit slotId="1000000004" className="max-w-4xl mx-auto px-4" />

      <Challenges />
      <Insights />
      <Discussion />

      {/* Internal PageRank Distribution */}
      <RelatedContent />

      <CommunityFAB />
    </div>
  );
}

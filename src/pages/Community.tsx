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

export default function Community() {
  return (
    <div className="bg-primary min-h-screen">
      <CommunityHero />
      <PersonalDashboard />
      <AIRecommendations />
      <FeaturedCreators />
      <CreativeFeed />
      <LearningHub />
      <Workshops />
      <Challenges />
      <Insights />
      <Discussion />
      <CommunityFAB />
    </div>
  );
}

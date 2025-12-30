import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ComparisonItem {
  title: string;
  description: string;
  points: string[];
  color: string;
}

export interface PlanWeek {
  week: string;
  title: string;
  items: string[];
}

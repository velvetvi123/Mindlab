
export type UserRole = 'CREATOR' | 'SPECIALIST' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface IdeaCreator extends User {
  companyName?: string;
  bio?: string;
  projects?: Project[];
}

export interface Skill {
  id: string;
  name: string;
}

export interface Specialist extends User {
  bio: string;
  skills: Skill[];
  yearsOfExperience: number;
  portfolioLinks?: string[];
  hourlyRate: number;
  profilePicture?: string;
  experience?: Experience[];
  certifications?: Certification[];
  availability: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';
  averageRating?: number;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  documentUrl?: string;
}

export type ProjectStatus = 'DRAFT' | 'PUBLISHED' | 'IN_PROGRESS' | 'COMPLETED';

export interface Project {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  requiredSkills: Skill[];
  budgetMin: number;
  budgetMax: number;
  timeline: '1_MONTH' | '1_3_MONTHS' | '3_6_MONTHS' | '6_PLUS_MONTHS';
  experienceLevel: 'JUNIOR' | 'MID_LEVEL' | 'SENIOR';
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentRecord {
  id: string;
  userId: string;
  projectId: string;
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  projectId: string;
  content: string;
  attachmentUrl?: string;
  read: boolean;
  createdAt: string;
}

export interface Rating {
  id: string;
  fromUserId: string;
  toUserId: string;
  projectId: string;
  rating: number; // 1-5
  comment?: string;
  createdAt: string;
}

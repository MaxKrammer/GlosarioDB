
import React from 'react';

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  Icon: React.FC<{ className?: string }>;
}

export interface GlossarySection {
  title: string;
  introduction: string;
  terms: GlossaryTerm[];
}

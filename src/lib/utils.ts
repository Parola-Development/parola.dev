export function categorySlug(category: string): string {
  const map: Record<string, string> = {
    'Cyber Essentials': 'cyber',
    'Microsoft 365':    'm365',
    'Email Security':   'email',
    'Managed IT':       'managed',
  };
  return map[category] ?? category.toLowerCase().replace(/\s+/g, '-');
}

export function shortDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

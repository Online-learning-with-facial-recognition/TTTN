export function Select({ children, className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={`border p-2 rounded w-full ${className}`} {...props}>{children}</select>;
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <option value={value}>{children}</option>;
}

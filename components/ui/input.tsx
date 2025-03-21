export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`border p-2 rounded w-full ${className}`} {...props} />;
}

type Props = {
  className?: string;
};

function Linkedn({ className }: Props) {
  const defaultClassName = "lucide lucide-linkedin";
  const combinedClasses = `${defaultClassName} ${className}`.trim();

  return (
    <a href="https://www.linkedin.com/in/javihdezperez" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2D2420"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={combinedClasses}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  );
}

export default Linkedn;

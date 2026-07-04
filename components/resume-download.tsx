import { Download } from "lucide-react";

export function ResumeDownload() {
  return (
    <a
      className="resume-download"
      href="/Surya_Pandi_Resume.pdf"
      download="Surya_Pandi_Resume.pdf"
      aria-label="Download Surya Pandi resume as PDF"
    >
      <svg className="resume-download-ring" viewBox="0 0 140 140" aria-hidden="true">
        <defs>
          <path id="resume-text-path" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
        </defs>
        <text>
          <textPath href="#resume-text-path" startOffset="1%">
            DOWNLOAD RESUME / PDF / DOWNLOAD RESUME / PDF /
          </textPath>
        </text>
      </svg>
      <span className="resume-download-core"><Download /></span>
    </a>
  );
}

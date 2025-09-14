import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  stack: string;
  summary: string;
  githubUrl: string;
  docsUrl?: string;
  imageHeight?: number;  // optional height in pixels
  imageWidth?: number;   // optional width in pixels
}

export default function ProjectCard({ 
  imageSrc, 
  imageAlt, 
  stack, 
  summary, 
  githubUrl,
  docsUrl,
  imageHeight,
  imageWidth 
}: ProjectCardProps) {
  const imageStyle = {
    height: imageHeight ? `${imageHeight}px` : 'auto',
    width: imageWidth ? `${imageWidth}px` : '100%'
  };

  return (
    <div className={styles.terminalBox}>
      <Image 
        src={imageSrc} 
        alt={imageAlt} 
        className={styles.projectImage}
        style={imageStyle}
        width={imageWidth || 400}
        height={imageHeight || 300}
      />
      <div className={styles.projectContent}>
        <p className={styles.stack}>{stack}</p>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.buttonRow}>
          <a 
            href={githubUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <FaGithub />
            view on github
          </a>
          {docsUrl && (
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              📖 documentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
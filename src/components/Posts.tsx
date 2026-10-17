import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import avatar from "../assets/images/photo-icon.jpg";
import edgeAiImg from "../assets/images/linkedin/edge-ai-vision.webp";
import codebaseImg from "../assets/images/linkedin/codebase-intelligence.webp";
import graduationImg from "../assets/images/linkedin/ub-graduation.webp";
import "../assets/styles/Posts.scss";

const PROFILE_URL = "https://www.linkedin.com/in/sachinjeyakkumaran/";
const HEADLINE = "AI Product Builder @ Tabhi";

interface LinkedInPost {
  url: string;
  date: string;
  dateTime: string;
  excerpt: string;
  hashtags: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

/* Excerpts are the opening paragraphs of each post, copied verbatim. To add a post,
   paste its URL and opening text here and drop its image in assets/images/linkedin. */
const posts: LinkedInPost[] = [
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7441226918697422848/",
    date: "Mar 21, 2026",
    dateTime: "2026-03-21",
    excerpt:
      "What began as an Intro to Computer Vision coursework experiment eventually grew into a production-grade Edge AI security platform, inspired in part by the U.S. TV show “Person of Interest,” where intelligent systems analyze CCTV feeds to detect threats and help prevent crime.\n\n" +
      "The original objective was to benchmark YOLOv11 vs RT-DETR for weapon detection on degraded surveillance footage. While both models showed promising results in controlled testing, I realized that reliable real-time inference on constrained edge hardware required a more deployment-focused approach.",
    hashtags: ["AIEngineering", "ComputerVision", "YOLOv8", "ONNX", "FastAPI", "EdgeAI"],
    image: edgeAiImg,
    imageAlt: "Edge AI Vision Security Platform demo detecting a weapon in CCTV footage",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7439122783953113088/",
    date: "Mar 16, 2026",
    dateTime: "2026-03-16",
    excerpt:
      "Last spring, I built a prototype for an AI Codebase Intelligence System. Recently, I decided to pull it out of the archives, completely overhaul the architecture, and launch it to production.\n\n" +
      "Taking this from a local script to a deployed, multi-tenant web application was a massive exercise in what I call Systemic Engineering, the ability to build stable, infinitely scalable software around an AI model, rather than just developing the model in isolation.",
    hashtags: ["AIEngineering", "SystemDesign", "LLM", "RAG", "Backend"],
    image: codebaseImg,
    imageAlt: "Codebase Intelligence dashboard showing repository coverage and retrieval latency",
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7424924979252830208/",
    date: "Feb 4, 2026",
    dateTime: "2026-02-04",
    excerpt:
      "From my first snowfall in Buffalo to late autumn walks across campus and those rare sunny breaks after long winters, this journey has been shaped as much by the seasons as by the lessons inside the classroom. Every phase brought a different kind of challenge, growth, and perspective. Today, I’m happy to share that I’ve graduated from the University at Buffalo with my Master’s in Artificial Intelligence 🎓\n\n" +
      "This experience was never just about finishing courses. It was about pushing through uncertainty, learning from every failed experiment, and slowly building confidence through consistent effort.",
    hashtags: [],
    image: graduationImg,
    imageAlt: "Sachin in front of Capen Hall at the University at Buffalo",
    imagePosition: "50% 88%",
  },
];

const actions = [
  { label: "Like", Icon: ThumbUpOutlinedIcon },
  { label: "Comment", Icon: ChatBubbleOutlineIcon },
  { label: "Repost", Icon: RepeatIcon },
  { label: "Send", Icon: SendOutlinedIcon },
];

function PostCard({ url, date, dateTime, excerpt, hashtags, image, imageAlt, imagePosition }: LinkedInPost) {
  return (
    <article className="li-card">
      <header className="li-card-header">
        <img src={avatar} alt="" className="li-avatar" />
        <div className="li-author">
          <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="li-name">
            Sachin Saailesh Jeyakkumaran
          </a>
          <span className="li-headline">{HEADLINE}</span>
          <span className="li-meta">
            <time dateTime={dateTime}>{date}</time> · <PublicIcon sx={{ fontSize: '0.85rem' }} />
          </span>
        </div>
        <LinkedInIcon className="li-logo" />
      </header>

      <p className="li-text">{excerpt}</p>
      <a href={url} target="_blank" rel="noreferrer" className="li-see-more">…see more</a>

      {hashtags.length > 0 && (
        <div className="li-hashtags">
          {hashtags.map((tag) => (
            <a key={tag} href={`https://www.linkedin.com/feed/hashtag/${tag.toLowerCase()}/`} target="_blank" rel="noreferrer">
              #{tag}
            </a>
          ))}
        </div>
      )}

      <a href={url} target="_blank" rel="noreferrer" className="li-media">
        <img src={image} alt={imageAlt} loading="lazy" style={{ objectPosition: imagePosition }} />
      </a>

      <footer className="li-actions">
        {actions.map(({ label, Icon }) => (
          <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={`${label} on LinkedIn`}>
            <Icon sx={{ fontSize: '1.1rem' }} />
            <span>{label}</span>
          </a>
        ))}
      </footer>
    </article>
  );
}

function Posts() {
  return (
    <section className="posts-container" id="posts">
      <div className="posts-header">
        <div>
          <span className="section-eyebrow">From LinkedIn</span>
          <h2 className="posts-heading">Recent Posts</h2>
        </div>
        <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="li-follow-btn">
          <LinkedInIcon sx={{ fontSize: '1rem' }} /> Follow on LinkedIn
        </a>
      </div>

      <div className="posts-grid">
        {posts.map((post) => <PostCard key={post.url} {...post} />)}
      </div>
    </section>
  );
}

export default Posts;

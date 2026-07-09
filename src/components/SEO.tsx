import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

export default function SEO({
  title,
  description,
  name = "Siddhu Singh",
  type = "website",
  keywords = [],
  image = "https://siddhu.info/og-image.jpg",
  url,
  author = "Siddhu Singh",
  publishedTime,
  modifiedTime,
  section
}: SEOProps) {
  // Base keywords that apply to all pages
  const baseKeywords = [
    // Primary name combinations
    "Siddhu Singh",
    "siddhu",
    "sidcodes",
    "sid codes",
    "siddhux9",
    "siddhu x9",
    "siddhu3116",
    "siddhu 3116",
    "siddhu singh sidcodes",
    "siddhu singh siddhux9",
    "siddhu singh siddhu3116",
    "siddhusingh",
    "Phantom Codes",
    "phantomcodes",
    "phantom codes siddhu",

    // Name + role combinations
    "siddhu blockchain developer",
    "sidcodes blockchain",
    "siddhux9 developer",
    "siddhu3116 web3",
    "siddhu web3 developer",
    "sidcodes web3",
    "siddhux9 blockchain",
    "siddhu3116 blockchain",
    "siddhu full stack developer",
    "sidcodes full stack",
    "siddhux9 full stack",
    "siddhu3116 developer",
    "siddhu solidity developer",
    "sidcodes solidity",
    "siddhux9 web3",
    "siddhu3116 solidity",

    // Name + technology combinations
    "siddhu ethereum",
    "sidcodes ethereum",
    "siddhux9 ethereum",
    "siddhu3116 ethereum",
    "siddhu defi",
    "sidcodes defi",
    "siddhux9 defi",
    "siddhu3116 defi",
    "siddhu smart contracts",
    "sidcodes smart contracts",
    "siddhux9 smart contracts",
    "siddhu3116 smart contracts",

    // General tech keywords
    "blockchain developer",
    "web3 developer",
    "full stack developer",
    "solidity developer",
    "smart contracts",
    "ethereum developer",
    "DeFi developer",
    "NFT developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "cryptocurrency developer",
    "dApp developer",
    "decentralized applications",
    "blockchain consultant",
    "crypto consultant",
    "Web3 architect",
    "blockchain architecture",
    "smart contract auditing",
    "DeFi protocol",
    "crypto portfolio",
    "blockchain projects",
    "Web3 portfolio"
  ];

  const allKeywords = [...baseKeywords, ...keywords];
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://siddhu.info');
  const canonicalUrl = currentUrl.split('?')[0]; // Remove query params for canonical

  // Structured Data - Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Siddhu Singh",
    "alternateName": ["sidcodes", "siddhux9", "siddhu3116", "Phantom Codes", "sid codes", "siddhu x9"],
    "description": "Full-stack blockchain developer and Web3 architect specializing in DeFi, smart contracts, and decentralized applications. Known as sidcodes, siddhux9, and siddhu3116 across platforms.",
    "url": "https://siddhu.info",
    "image": image,
    "sameAs": [
      "https://github.com/siddhux9",
      "https://github.com/siddhu3116",
      "https://linkedin.com/in/siddhu-singh",
      "https://x.com/sidcodes",
      "https://medium.com/@sidcodes",
      "https://dorahacks.io/user/sidcodes"
    ],
    "jobTitle": "Blockchain Developer & Full Stack Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Phantom Codes"
    },
    "knowsAbout": [
      "Blockchain",
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "DeFi",
      "Web3",
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Cryptocurrency",
      "NFT"
    ]
  };

  // Structured Data - WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Siddhu Singh - Blockchain Developer Portfolio",
    "alternateName": "Phantom Codes",
    "url": "https://siddhu.info",
    "description": "Portfolio and projects of Siddhu Singh, a full-stack blockchain developer specializing in Web3, DeFi, and smart contract development",
    "author": {
      "@type": "Person",
      "name": "Siddhu Singh"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://siddhu.info/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Structured Data - Professional Service
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Phantom Codes - Blockchain Development Services",
    "founder": {
      "@type": "Person",
      "name": "Siddhu Singh"
    },
    "description": "Professional blockchain development, smart contract auditing, and Web3 consulting services",
    "url": "https://siddhu.info",
    "areaServed": "Worldwide",
    "serviceType": [
      "Blockchain Development",
      "Smart Contract Development",
      "DeFi Protocol Development",
      "Web3 Consulting",
      "Full Stack Development"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Language and Geo */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="Worldwide" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Siddhu Singh - Phantom Codes" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      <meta property="article:author" content="Siddhu Singh" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@sidcodes" />
      <meta name="twitter:site" content="@sidcodes" />

      {/* Additional Meta */}
      <meta name="theme-color" content="#00ff00" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />

      {/* Verification Tags (add your actual verification codes) */}
      <meta name="google-site-verification" content="your-google-verification-code" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
}

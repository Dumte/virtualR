const resourcesLinks = [
  { id: 1, href: "#", text: "Getting Started" },
  { id: 2, href: "#", text: "Documentation" },
  { id: 3, href: "#", text: "Tutorials" },
  { id: 4, href: "#", text: "API Reference" },
  { id: 5, href: "#", text: "Community Forums" },
];

const platformLinks = [
  { id: 1, href: "#", text: "Features" },
  { id: 2, href: "#", text: "Supported Devices" },
  { id: 3, href: "#", text: "System Requirements" },
  { id: 4, href: "#", text: "Downloads" },
  { id: 5, href: "#", text: "Release Notes" },
];

const communityLinks = [
  { id: 1, href: "#", text: "Events" },
  { id: 2, href: "#", text: "Meetups" },
  { id: 3, href: "#", text: "Conferences" },
  { id: 4, href: "#", text: "Hackathons" },
  { id: 5, href: "#", text: "Jobs" },
];

const Footer = () => {
  return (
    <footer className="mt-20 py-10 border-r border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            {resourcesLinks.map((resource) => (
              <li key={resource.id}>
                <a
                  href={resource.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Platforms</h3>
          <ul className="space-y-3">
            {platformLinks.map((platform) => (
              <li key={platform.id}>
                <a
                  href={platform.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {platform.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-3">
            {communityLinks.map((community) => (
              <li key={community.id}>
                <a
                  href={community.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {community.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border px-4 py-8">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
            <Flame className="h-3 w-3 text-primary-foreground" />
          </div>
          <span className="font-heading text-sm font-bold text-foreground">
            Money<span className="text-primary">Flow</span>
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/uber-earnings-calculator" className="hover:text-foreground transition-colors">Uber Calculator</Link>
          <Link to="/lyft-earnings-calculator" className="hover:text-foreground transition-colors">Lyft Calculator</Link>
          <Link to="/doordash-earnings-calculator" className="hover:text-foreground transition-colors">DoorDash Calculator</Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MoneyFlow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold font-display text-foreground mb-3">
              Royal <span className="text-gradient-violet">Monarch</span>
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              Technology & talent solutions that help businesses run smarter.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-body uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Talent Solutions</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">AI & Automation</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Cost Optimization</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-body uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-body uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><Link to="/industries" className="hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors">Finance</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors">Retail & eCommerce</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground font-body">
          © 2026 Royal Monarch Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

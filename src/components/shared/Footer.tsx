import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react"; // Alternatively use other icons if preferred
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">E-Learning</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hello@skillbridge.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 91813 23 2309
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Somewhere in the World
            </li>
          </ul>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="font-semibold mb-3">Home</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Benefits</li>
            <li>Our Courses</li>
            <li>Our Testimonials</li>
            <li>Our FAQ</li>
          </ul>
        </div>

        {/* About Links */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Company</li>
            <li>Achievements</li>
            <li>Our Goals</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Social Profiles</h3>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="bg-muted rounded-md">
              <FacebookIcon className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-muted rounded-md">
              <TwitterIcon className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-muted rounded-md">
              <LinkedinIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t text-center text-xs text-muted-foreground py-4 px-4">
        © 2023 Skillbridge. All rights reserved.
      </div>
    </footer>
  );
}

import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/brewddy/Nav";
import { Footer } from "@/components/brewddy/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const About = () => {
  useReveal();

  const teamMembers = [
    { name: "John Doe", role: "Founder & CEO", image: "/team/john.jpg" },
    { name: "Jane Smith", role: "Head Barista", image: "/team/jane.jpg" },
    { name: "Mike Johnson", role: "Operations Manager", image: "/team/mike.jpg" },
    { name: "Sarah Wilson", role: "Marketing Director", image: "/team/sarah.jpg" },
  ];

  const orgChart = [
    { name: "John Doe", role: "CEO", level: 1 },
    { name: "Jane Smith", role: "Head Barista", level: 2 },
    { name: "Mike Johnson", role: "Operations Manager", level: 2 },
    { name: "Sarah Wilson", role: "Marketing Director", level: 2 },
    { name: "Alex Brown", role: "Barista", level: 3 },
    { name: "Emma Davis", role: "Barista", level: 3 },
  ];

  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/brewddy-photo.jpg')" }}>
        <div className="absolute inset-0 bg-espresso/70"></div>
        <div className="relative z-10 text-center text-cream">
          <h1 className="text-6xl font-bold mb-4">About Brewddy</h1>
          <p className="text-xl max-w-2xl mx-auto">Crafting exceptional coffee experiences since 2024</p>
        </div>
      </section>

      {/* About Us Details */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-espresso mb-8 text-center">Our Story</h2>
          <p className="text-lg text-espresso/80 leading-relaxed mb-6">
            Brewddy was born from a passion for exceptional coffee and a vision to create a community where coffee lovers can connect, relax, and enjoy the finest brews. Founded in 2010 by coffee enthusiast John Doe, we've grown from a small local roastery to a beloved coffee destination.
          </p>
          <p className="text-lg text-espresso/80 leading-relaxed">
            Our commitment to quality, sustainability, and innovation drives everything we do. We source the best beans from ethical farms around the world, roast them to perfection, and serve them with care in our cozy cafes.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4 bg-espresso">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-cream border-none">
              <CardHeader>
                <CardTitle className="text-3xl text-espresso">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-espresso/80">
                  To provide an unparalleled coffee experience that brings people together, supports sustainable practices, and celebrates the art of coffee craftsmanship.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-cream border-none">
              <CardHeader>
                <CardTitle className="text-3xl text-espresso">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-espresso/80">
                  To be the leading coffee brand that inspires coffee culture, fosters community, and sets the standard for quality and sustainability in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-espresso mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center bg-cream border-espresso/20">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-espresso mb-2">{member.name}</h3>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-20 px-4 bg-espresso">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-cream mb-12 text-center">Organization Chart</h2>
          <div className="flex flex-col items-center space-y-8">
            {/* CEO */}
            <div className="flex flex-col items-center">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center text-cream">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm">CEO</p>
              </div>
            </div>
            {/* Line */}
            <div className="w-px h-8 bg-cream"></div>
            {/* Managers */}
            <div className="flex space-x-12">
              {orgChart.filter(m => m.level === 2).map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-12 h-12 mb-2">
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="text-center text-cream">
                    <p className="font-semibold text-sm">{member.name}</p>
                    <p className="text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Lines */}
            <div className="flex space-x-12">
              {orgChart.filter(m => m.level === 2).map((_, index) => (
                <div key={index} className="w-px h-8 bg-cream"></div>
              ))}
            </div>
            {/* Baristas */}
            <div className="flex space-x-8">
              {orgChart.filter(m => m.level === 3).map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-10 h-10 mb-2">
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="text-center text-cream">
                    <p className="font-semibold text-xs">{member.name}</p>
                    <p className="text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
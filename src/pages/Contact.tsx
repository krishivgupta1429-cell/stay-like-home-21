import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <Card>
          <CardHeader>
            <CardTitle>We'd love to hear from you</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Basic inline feedback for now
                alert("Thanks for reaching out! We'll get back to you soon.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First name
                  </label>
                  <Input id="firstName" placeholder="Jane" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help?" rows={5} required />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>
                Prefer email? Reach us at <span className="font-medium">support@staylikehome.example</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Contact;



<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { stepStore } from "$lib/stores";
	import { Award, Globe, Star, Users } from "lucide-svelte";


</script>

<div class="min-h-screen bg-background">
      <section class="relative bg-gradient-hero text-white py-20 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Jordan Recruitment Pathways
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Your gateway to sponsored employment in Jordan. We help international professionals 
            secure jobs with visa sponsorship and a path to citizenship.
          </p>
          <Button 
            onclick={() => $stepStore = 'registration'}
            size="lg"
            class="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-elegant"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Our Recruitment Service?
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold mb-2">Visa Sponsorship</h3>
              <p class="text-muted-foreground">
                Get full visa sponsorship and work authorization in Jordan
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold mb-2">Expert Coaching</h3>
              <p class="text-muted-foreground">
                Professional CV recreation and comprehensive interview preparation
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold mb-2">Proven Success</h3>
              <p class="text-muted-foreground">
                High success rate in securing employment for our candidates
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold mb-2">Path to Citizenship</h3>
              <p class="text-muted-foreground">
                After 5 years of sponsored work, you can obtain Jordanian citizenship
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-foreground mb-4">
              Choose Your Package
            </h2>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select from our comprehensive sponsorship packages. Each includes professional CV recreation, 
              interview preparation, and full sponsorship support.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-card border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-smooth">
              <h3 class="text-2xl font-bold text-foreground mb-2">Starter Package</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-primary">£500</span>
              </div>
              <p class="text-muted-foreground mb-6">1 Interview Opportunity</p>
              
              <ul class="space-y-2 mb-8 text-left">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Professional CV recreation</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Cover letter optimization</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">1 interview preparation session</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Interview readiness coaching</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Sponsorship guidance</span>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                class="w-full"
            onclick={() => $stepStore = 'registration'}
              >
                Get Started
              </Button>
            </div>

            <div class="bg-card border-2 border-primary rounded-lg p-8 text-center relative hover:shadow-elegant transition-smooth">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                <span class="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <h3 class="text-2xl font-bold text-foreground mb-2">Professional Package</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-primary">£750</span>
              </div>
              <p class="text-muted-foreground mb-6">2 Interview Opportunities</p>
              
              <ul class="space-y-2 mb-8 text-left">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Professional CV recreation</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Cover letter optimization</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">2 interview preparation sessions</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Advanced interview coaching</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Sponsorship & visa guidance</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Follow-up assistance</span>
                </li>
              </ul>
              
              <Button 
                class="w-full bg-gradient-primary hover:opacity-90 shadow-elegant"
            onclick={() => $stepStore = 'registration'}
              >
                Get Started
              </Button>
            </div>

            <div class="bg-card border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-smooth">
              <h3 class="text-2xl font-bold text-foreground mb-2">Premium Package</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-primary">£1,500</span>
              </div>
              <p class="text-muted-foreground mb-6">3 Interview Opportunities</p>
              
              <ul class="space-y-2 mb-8 text-left">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Professional CV recreation</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Cover letter optimization</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">3 interview preparation sessions</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Comprehensive interview coaching</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Complete sponsorship support</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">Priority job matching</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm">90-day follow-up support</span>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                class="w-full"
            onclick={() => $stepStore = 'registration'}
              >
                Get Started
              </Button>
            </div>
          </div>

          <div class="text-center">
            <p class="text-muted-foreground mb-4">
              <strong>Important:</strong> If you don't get a job after your interviews, you can purchase additional packages. 
              If you succeed in getting a job, no additional packages needed!
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 px-4 bg-muted/50">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-foreground mb-12">
            How Our Process Works
          </h2>
          
          <div class="space-y-8">
            <div class="flex gap-4">
              <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Registration & Assessment</h3>
                <p class="text-muted-foreground">
                  Complete our comprehensive registration form with your details, CV, and experience. 
                  We'll call you within 24 hours to discuss your profile.
                </p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 class="text-xl font-semibold mb-2">CV Recreation & Preparation</h3>
                <p class="text-muted-foreground">
                  Our experts recreate your CV and cover letter to Jordan market standards. 
                  You'll receive interview preparation sessions and coaching.
                </p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Interview Opportunities</h3>
                <p class="text-muted-foreground">
                  Based on your package, you'll get 1-3 interview opportunities with sponsoring employers. 
                  If you don't succeed, you can purchase additional packages.
                </p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Employment & Sponsorship</h3>
                <p class="text-muted-foreground">
                  Once you secure a job, we help with visa processing and sponsorship documentation. 
                  After 5 years, you're eligible for Jordanian citizenship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Career in Jordan?
          </h2>
          <p class="text-xl text-muted-foreground mb-8">
            Join hundreds of professionals who have successfully secured sponsored employment in Jordan
          </p>
          <Button 
            onclick={() => $stepStore = 'registration'}
            size="lg"
            class="bg-gradient-primary hover:opacity-90 shadow-elegant text-lg px-8 py-6"
          >
            Register Now
          </Button>
        </div>
      </section>
    </div>
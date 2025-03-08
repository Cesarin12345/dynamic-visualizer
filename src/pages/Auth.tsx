
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, LogIn, UserPlus, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Mock login success
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
    
    // Navigate to home after login
    setTimeout(() => navigate("/"), 1500);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Mock signup success
    toast({
      title: "Account created!",
      description: "Your account has been successfully created.",
    });
    
    // Navigate to home after signup
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image section - takes up half the screen on larger devices */}
      <div className="hidden md:block md:w-1/2 bg-black relative">
        <img 
          src="/lovable-uploads/ade3d242-0f02-40a7-9099-11cf2497b188.png" 
          alt="Grupo Laces Logo" 
          className="absolute inset-0 w-full h-full object-contain p-12" 
        />
      </div>

      {/* Auth forms section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="w-full max-w-md">
          {/* Logo for mobile view */}
          <div className="md:hidden mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/ade3d242-0f02-40a7-9099-11cf2497b188.png" 
              alt="Grupo Laces Logo" 
              className="w-32 h-32 object-contain" 
            />
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <Card className="border-none shadow-lg bg-gray-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Welcome Back</CardTitle>
                  <CardDescription className="text-gray-400">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          className="pl-10 bg-gray-800 border-gray-700 text-white"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          className="pl-10 bg-gray-800 border-gray-700 text-white"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-10 w-10 text-gray-400 hover:text-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <div className="text-right">
                        <a href="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <Button type="submit" className="w-full gap-2">
                      <LogIn className="h-4 w-4" />
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Signup Form */}
            <TabsContent value="signup">
              <Card className="border-none shadow-lg bg-gray-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Create Account</CardTitle>
                  <CardDescription className="text-gray-400">
                    Enter your details to register for a new account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="bg-gray-800 border-gray-700 text-white"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-white">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="signup-email" 
                          type="email" 
                          placeholder="your@email.com" 
                          className="pl-10 bg-gray-800 border-gray-700 text-white"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-white">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="signup-password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          className="pl-10 bg-gray-800 border-gray-700 text-white"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-10 w-10 text-gray-400 hover:text-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          id="terms" 
                          className="rounded text-primary border-gray-700 bg-gray-800 focus:ring-primary"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-400">
                          I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full gap-2">
                      <UserPlus className="h-4 w-4" />
                      Create Account
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;

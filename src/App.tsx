import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Mail, Cloud, Camera, Brain } from "lucide-react"
import './App.css'
import logo from './assets/icon.png'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            <img src={logo} alt="Otologic Technologies" className="h-15 w-15 inline-block mr-2" /> Otologic Technologies
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Enhancing Ear Health Diagnostics Through Digital Innovation
          </p>
          <Separator className="my-6" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Closure Notice */}
          <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">Operations Update</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 dark:text-amber-300">
                As of September 2025, Otologic Technologies has ceased operations. We thank all our partners and supporters for their trust in our mission to improve ear health diagnostics.
              </p>
            </CardContent>
          </Card>

          {/* Company Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Otologic Technologies was dedicated to revolutionizing ear health diagnostics through innovative
                digital otoscopy solutions. Our products aimed to simplify clinical workflows, improve diagnostic
                accuracy, and elevate patient care in the field of otology.
              </p>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">OtoStorage™</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A secure, HIPAA-compliant cloud platform for storing and sharing digital otoscopy
                  images and videos, facilitating collaboration among clinicians and patients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">OtoPix™</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Proprietary software designed to generate a single, clear image of the tympanic
                  membrane from video feeds, enhancing visibility and aiding in precise analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <CardTitle className="text-lg">EarScore™</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  An AI-driven tool that provides probabilities of tympanic membrane conditions,
                  supporting informed clinical decision-making.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                For any inquiries or further information, please reach out to us:
              </p>
              <Button asChild variant="default" size="lg">
                <a href="mailto:alex@otologictech.com" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  alex@otologictech.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Thank you for your support and interest in our mission to improve ear health diagnostics.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      toast({
        title: t('contact.form.success'),
        duration: 3000
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        variant: 'destructive',
        duration: 3000
      });
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontakt</h1>
          <p className="text-xl text-primary">einfach mal Hallo sagen ;-)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Direkter Kontakt</h2>
              <p className="text-gray-300 mb-8">
                Fühlen Sie sich frei, uns zu kontaktieren. Geben Sie uns Feedback, 
                stellen Sie uns Fragen - gerne nehmen wir auch Ihre Anregungen und 
                Kritiken entgegen.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-black/50 border-primary/20">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-white">Adresse</h3>
                    <p className="text-gray-300">Friedhofstr. 12<br />45478 Mülheim a.d.Ruhr</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-black/50 border-primary/20">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-white">Telefon</h3>
                    <p className="text-gray-300">0208 - 41 06 19</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-black/50 border-primary/20">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-white">E-Mail</h3>
                    <p className="text-gray-300">info@elektro-schiel.de</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-black/50 border-primary/20">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-white">Öffnungszeiten</h3>
                    <p className="text-gray-300">
                      Mo - Fr: 08:00 - 17:00<br />
                      Sa: Nach Vereinbarung
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-black/50 border-primary/20">
            <h2 className="text-2xl font-bold text-white mb-6">Schreiben Sie uns</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.name')}
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border-primary/20 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border-primary/20 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="bg-black/50 border-primary/20 text-white"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
              >
                {t('contact.form.submit')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
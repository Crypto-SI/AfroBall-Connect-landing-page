"use client";

import { useEffect, useState } from 'react';

export default function ConvertKitForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-gradient-to-br from-[#F37021] to-[#E85D04] rounded-2xl p-8 shadow-2xl border border-[#F37021]/30">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-6 bg-white/20 rounded mb-4"></div>
              <div className="h-4 bg-white/20 rounded mb-2"></div>
              <div className="h-4 bg-white/20 rounded w-3/4 mx-auto mb-6"></div>
              <div className="h-12 bg-white/20 rounded mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form 
      action="https://app.kit.com/forms/8540027/subscriptions" 
      className="seva-form formkit-form" 
      method="post" 
      data-sv-form="8540027" 
      data-uid="6273feb6f2" 
      data-format="inline" 
      data-version="5" 
      data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://app.kit.com/forms/success?form_id=8540027","redirect_target":"_blank"},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      min-width="400 500 600 700 800"
    >
      <div className="formkit-background" style={{ opacity: 0.1 }}></div>
      <div data-style="minimal">
        <div className="formkit-header" data-element="header" style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: "700", textAlign: "center", marginBottom: "8px" }}>
          <h2 className="text-white">Get Exclusive Content</h2>
        </div>
        <div className="formkit-subheader" data-element="subheader" style={{ color: "#F2EDE4", fontSize: "16px", textAlign: "center", marginBottom: "24px" }}>
          <p className="text-[#F2EDE4]">Join thousands of African football fans</p>
        </div>
        <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
        <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
          <div className="formkit-field mb-4">
            <input 
              className="formkit-input w-full px-4 py-3 rounded-lg border-0 bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:bg-white transition-all duration-200" 
              name="email_address" 
              aria-label="Email Address" 
              placeholder="Enter your email address" 
              required={true} 
              type="email" 
            />
          </div>
          <button data-element="submit" className="formkit-submit formkit-submit w-full bg-[#363636] hover:bg-[#2A2A2A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:ring-offset-2 focus:ring-offset-[#F37021]/20" style={{ color: "rgb(255, 255, 255)", backgroundColor: "rgb(54, 54, 54)", borderRadius: "8px", fontWeight: "600" }}>
            <div className="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span className="">Join Newsletter</span>
          </button>
        </div>
        <div className="formkit-guarantee" data-element="guarantee" style={{ color: "#F2EDE4", fontSize: "14px", fontWeight: "400", textAlign: "center", marginTop: "16px" }}>
          <p className="text-[#F2EDE4]">We respect your privacy. Unsubscribe anytime.</p>
        </div>
        <div className="formkit-powered-by-convertkit-container" style={{ marginTop: "20px" }}>
          <a 
            href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" 
            data-element="powered-by" 
            className="formkit-powered-by-convertkit" 
            data-variant="light" 
            target="_blank" 
            rel="nofollow"
            style={{ fontSize: "12px", color: "#F2EDE4", opacity: "0.8" }}
          >
            Built with Kit
          </a>
        </div>
      </div>
    </form>
  );
}
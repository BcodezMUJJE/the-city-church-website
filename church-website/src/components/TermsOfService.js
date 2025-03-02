import { useState } from "react";
import "./TermsOfService.css"; // Ensure this file exists

export default function TermsOfService() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center mt-4">
      {/* Replace Button with a standard button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Learn More
      </button>

      {/* Replace Dialog with a conditional rendering of a div */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          {/* Replace DialogContent with a div */}
          <div className="bg-white max-w-2xl w-full p-6 rounded-lg">
            {/* Replace DialogHeader with a div */}
            <div className="border-b pb-4">
              {/* Replace DialogTitle with an h2 */}
              <h2 className="text-xl font-bold">Privacy Policy</h2>
            </div>

            {/* Content */}
            <div className="text-sm space-y-4 overflow-y-auto max-h-[500px] mt-4">
              <p><strong>The City Church</strong></p>
              <p><strong>Effective Date:</strong> 1/March/2025</p>
              <p><strong>1. Introduction</strong><br />
                The City Church is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://thecitychurch.or.ug/" target="_blank" rel="noreferrer" className="text-blue-500 underline">https://thecitychurch.or.ug/</a>. By using our website, you agree to the terms of this Privacy Policy.
              </p>
              <p><strong>2. Information We Collect</strong><br />
                We may collect personal information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Prayer requests or other submissions</li>
              </ul>
              <p>Additionally, we may automatically collect non-personal information such as:</p>
              <ul className="list-disc list-inside">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Website usage data (cookies and analytics)</li>
              </ul>
              <p><strong>3. How We Use Your Information</strong></p>
              <ul className="list-disc list-inside">
                <li>Communicate with you regarding church events, services, and updates</li>
                <li>Respond to inquiries or prayer requests</li>
                <li>Process donations and send contribution receipts</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p><strong>4. Sharing of Information</strong><br />
                We do not sell, rent, or trade your personal information. However, we may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside">
                <li>With trusted third-party service providers who assist us in website operations, digital payments, or communications</li>
                <li>As mandated by law or to protect legal rights</li>
                <li>With your consent in line with the Data Privacy and Protection Act 2019.</li>
              </ul>
              <p><strong>5. Cookies and Tracking Technologies</strong><br />
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies or alert you when cookies are being sent.
              </p>
              <p><strong>6. Data Security</strong><br />
                We implement reasonable security measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
              <p><strong>7. Third-Party Links</strong><br />
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>
              <p><strong>8. Your Rights and Choices</strong></p>
              <ul className="list-disc list-inside">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of communications</li>
                <li>Request details about data usage</li>
              </ul>
              <p>To exercise these rights, contact us at <a href="mailto:info@thecitychurch.or.ug" className="text-blue-500 underline">info@thecitychurch.or.ug</a>.</p>
              <p><strong>9. Children's Privacy</strong><br />
                Our website is not directed toward children under the age of 18. We do not knowingly collect personal information from children. This website strives to be in complete adherence to Uganda’s Data Privacy and Protection Act 2019.
              </p>
              <p><strong>10. Changes to This Privacy Policy</strong><br />
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
              </p>
              <p><strong>11. Contact Us</strong><br />
                If you have any questions about this Privacy Policy, please contact us at:<br />
                <strong>The City Church</strong><br />
                Kitintale-Luzira, Kampala.<br />
                Email: <a href="mailto:info@thecitychurch.or.ug" className="text-blue-500 underline">info@thecitychurch.or.ug</a><br />
                Telephone: +256 706 332572
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
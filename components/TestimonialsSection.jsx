import { CheckCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      text: 'The Kryvvia team built MakeSenseEdu end-to-end — the Spring Boot backend, the serverless HLS video pipeline on AWS Lambda + FFmpeg, and the Razorpay integration with webhook verification. They architected the full AWS stack within our budget without compromising on security. Clear communication and genuine ownership of the full SDLC.',
      author: 'Anusha Krishna',
      role: 'Founder • MakeSenseEducation',
      project: 'makesenseedu.com',
      projectLink: 'https://makesenseedu.com/',
      year: 'Oct 2025 – Apr 2026',
    },
    {
      text: 'The Kryvvia team transformed our resort into a polished online experience that presents our villas, deluxe rooms, dining, gallery, and nearby attractions beautifully on every device. They also made it easy for guests to contact us and book directly through WhatsApp. The website is fast, professional, and simple for our team to manage.',
      author: 'Gorakh Pawar',
      role: 'Founder • Ambrutratan Resort Bhandardara',
      project: 'ambrutratanresort.com',
      projectLink: 'https://ambrutratanresort.com/',
      year: '2026',
    },
    {
      text: 'The Kryvvia team delivered our hotel website from requirements gathering to production deployment. The admin panel, JWT authentication, and automated GitHub Actions → Docker → EC2 pipeline have kept the site running with zero downtime. Professional, responsive, and dependable throughout.',
      author: 'Prashant Khade',
      role: 'Founder • Hotel Kalsubai Gate Point',
      project: 'hotelkalsubaicamping.com',
      projectLink: 'https://hotelkalsubaicamping.com/',
      year: '2025',
    },
  ];

  return (
    <section id="testimonials" className="pt-8 pb-10 px-6 relative z-10 overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">Testimonials</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What Our Clients Say <span className="text-gradient">About Us.</span>
          </h3>
          <p className="text-gray-400 text-base font-light">
            Real feedback from startup founders and development leads who have worked with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between space-y-6 transition-all hover:border-white/10 hover:bg-neutral-900/40"
            >
              <blockquote className="text-gray-300 font-normal text-base leading-relaxed">
                {review.text}
              </blockquote>

              <div className="flex justify-between items-end pt-4 border-t border-white/5 mt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-bold text-base">{review.author}</span>
                    <span className="inline-flex items-center text-[10px] text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>

                <div className="text-right space-y-0.5">
                  {review.projectLink ? (
                    <a
                      href={review.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-gray-400 hover:text-white underline transition-colors block"
                    >
                      {review.project}
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-gray-400 block">{review.project}</span>
                  )}
                  <span className="text-[10px] text-gray-500 block">{review.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

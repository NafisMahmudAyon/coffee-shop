import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Stop by for a cup of coffee. We&apos;d love to see you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 fade-in-up">
            <div className='flex flex-col items-center md:items-start'>
              <h3 className='border-2 rounded-full inline-flex py-1 px-2 text-sm text-text-muted font-semibold'>Reach Out To Us</h3>
              <p className='text-3xl xl:text-4xl font-semibold mt-3 text-center md:text-left'>We&apos;d Love to Hear Form You.</p>
              <p className='text-text-muted mt-1 text-center md:text-left'>Or just reach out manually to <Link href={"#"} className='text-text'>hello@brewhaven.com</Link>.</p>
            </div>

            <div className='flex flex-col items-center md:items-start'>
              <h3 className="font-semibold text-lg mb-1">Address</h3>
              <p className="text-text-muted">
                123 Coffee Street<br />
                Bean City, BC 12345
              </p>
            </div>


            <div className='flex flex-col items-center md:items-start'>
              <h3 className="font-semibold text-lg mb-1">Hours</h3>
              <p className="text-text-muted">
                Monday - Friday: 7:00 AM - 8:00 PM<br />
                Saturday - Sunday: 8:00 AM - 9:00 PM
              </p>
            </div>


            <div className='flex flex-col items-center md:items-start'>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-text-muted">(555) 123-4567</p>
            </div>


          </div>

          {/* Map */}
          <div className="fade-in-up">
            <div className="w-full h-full min-h-80 rounded-xl overflow-hidden shadow-xl md:grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brew Haven Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

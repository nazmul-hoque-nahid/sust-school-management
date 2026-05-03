import React from 'react'

const SchoolMap = () => {
    return (
        <section className="rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 bg-white shadow-lg md:shadow-xl overflow-hidden">
            <div className="w-full aspect-video md:aspect-auto md:h-[500px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.462305438637!2d91.82829657393722!3d24.916316143022947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750fff54ef5c149%3A0xf203d560dc4a4f74!2sShahjalal%20University%20School%20And%20College!5e0!3m2!1sen!2sbd!4v1777804616138!5m2!1sen!2sbd" 
                    style={{ border: '0', width: '100%', height: '100%' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block"
                />
            </div>
        </section>
    );
};

export default SchoolMap
"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { contact } from "@/lib/data";

const serviceOptions = [
  "Private Safari Guiding",
  "Wildlife Safaris",
  "South Luangwa Safari Experiences",
  "Private Game Drives",
  "Walking Safari Experiences",
  "Tailor-Made Safari Planning"
];

type SuggestFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  suggestions: string[];
  className?: string;
  initialValue?: string;
  required?: boolean;
};

function SuggestField({ label, name, placeholder, suggestions, className, initialValue = "", required = false }: SuggestFieldProps) {
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const filtered = useMemo(() => {
    const q = value.trim().toLowerCase();
    return (q ? suggestions.filter((item) => item.toLowerCase().includes(q)) : suggestions).slice(0, 7);
  }, [suggestions, value]);

  return (
    <label className={`suggest-field ${className ?? ""}`}>
      <span>{label}</span>
      <div className="suggest-field__control">
        <input
          required={required}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        />
        {open && filtered.length > 0 ? (
          <div className="suggest-menu" role="listbox">
            {filtered.map((item) => (
              <button
                type="button"
                key={item}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setValue(item);
                  setOpen(false);
                }}
              >
                <span>{item}</span>
                <i>&#8599;</i>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </label>
  );
}

export function SafariForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (service) setSelectedService(service);
  }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>How do I enquire about a safari?</h3>
        <p>Use the website contact form, WhatsApp button, email or telephone contact details.</p>
        <div className="button-row">
          <a className="button button--forest" href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="button button--outline-dark" href={contact.emailHref}>Email</a>
        </div>
      </div>
    );
  }

  return (
    <form className="safari-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">Recommended Additional Feature</span>
        <h2>Safari Enquiry Form</h2>
      </div>
      <div className="form-grid">
        <label><span>Name</span><input required name="name" autoComplete="name" placeholder="Name" /></label>
        <label><span>Email</span><input required type="email" name="email" autoComplete="email" placeholder="Email" /></label>
        <label><span>Telephone/WhatsApp</span><input required name="phone" autoComplete="tel" inputMode="tel" placeholder="Telephone/WhatsApp" /></label>
        <SuggestField required label="Selected service" name="service" placeholder="Selected service" initialValue={selectedService} suggestions={serviceOptions} />
        <SuggestField required label="Country of residence" name="country" placeholder="Country of residence" suggestions={["Zambia", "South Africa", "United Kingdom", "United States", "Germany", "France", "Netherlands", "Australia", "Canada"]} />
        <SuggestField required label="Preferred travel dates" name="dates" placeholder="Preferred travel dates" suggestions={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]} />
        <SuggestField required label="Number of guests" name="guests" placeholder="Number of guests" suggestions={["1", "2", "3", "4", "5", "6", "7+"]} />
        <SuggestField required label="Safari interests" name="interests" placeholder="Safari interests" suggestions={["Wildlife & Animal Behaviour", "Zambia Safaris", "South Luangwa", "Conservation", "Safari Guiding", "Birding", "Photography", "Responsible Tourism"]} />
        <SuggestField required label="Preferred destination" name="destination" placeholder="Preferred destination" suggestions={["South Luangwa", "Zambia"]} />
        <SuggestField required label="Approximate safari duration" name="duration" placeholder="Approximate safari duration" suggestions={["2-3 days", "4-5 days", "6-7 days", "8-10 days", "10-14 days"]} />
        <SuggestField required className="form-grid__wide" label="Special requirements" name="requirements" placeholder="Special requirements" suggestions={["Photography", "Birding", "Wildlife interests", "No special requirements"]} />
        <label className="form-grid__wide"><span>Photography/birding/wildlife interests</span><input required name="focus" placeholder="Photography/birding/wildlife interests" /></label>
        <label className="form-grid__wide"><span>Additional message</span><textarea required name="message" placeholder="Additional message" /></label>
      </div>
      <div className="form-bottom">
        <p>Pricing: Available on request / tailor-made quotation.</p>
        <button className="button button--forest" type="submit">Enquire Now <span>&#8599;</span></button>
      </div>
    </form>
  );
}

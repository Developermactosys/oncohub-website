import doctorlist_image from "../../assets/images/doctorlist-image.png";




const doctorData = [
    {
      name: "Dr. Archana Mahadaven",
      specialty: "Cancer Specialist",
      experience: "10 years experience overall",
      location: "Parel, Mumbai",
      hospital: "Smilescancer Center for Advanced Cancer",
      consultationFee: "Consultation fee at clinic",
      rating: "99%",
      patientStories: "98 Patient Stories",
      drImage: doctorlist_image,
      availableDates: [
        {
          date: "Today",
          slotsAvailable: 11,
          timeSlots: {
            Morning: ["10:30 AM", "11:30 AM"],
            Afternoon: ["12:30 PM", "01:30 PM", "03:30 PM"],
            Evening: ["06:00 PM", "08:30 PM"],
          },
        },
        {
          date: "Tomorrow",
          slotsAvailable: 14,
          timeSlots: {
            Morning: ["09:30 AM", "10:00 AM"],
            Afternoon: ["12:00 PM", "02:00 PM", "04:00 PM"],
            Evening: ["06:30 PM", "07:30 PM"],
          },
        },
        {
          date: "Fri, 5 May",
          slotsAvailable: 16,
          timeSlots: {
            Morning: ["08:00 AM", "09:00 AM"],
            Afternoon: ["12:30 PM", "03:00 PM"],
            Evening: ["06:30 PM", "07:30 PM"],
          },
        },
      ],
    },
    {
      name: "Dr. Puneet Pathak",
      specialty: "Cancer Specialist",
      experience: "10 years experience overall",
      location: "Parel, Mumbai",
      hospital: "Smilescancer Center for Advanced Cancer",
      consultationFee: "Consultation fee at clinic",
      rating: "99%",
      patientStories: "98 Patient Stories",
      drImage: doctorlist_image,
      availableDates: [
        {
          date: "Today",
          slotsAvailable: 10,
          timeSlots: {
            Morning: ["09:00 AM", "10:00 AM"],
            Afternoon: ["12:30 PM", "02:00 PM"],
            Evening: ["06:00 PM", "08:00 PM"],
          },
        },
        {
          date: "Tomorrow",
          slotsAvailable: 12,
          timeSlots: {
            Morning: ["08:30 AM", "09:30 AM"],
            Afternoon: ["01:00 PM", "02:30 PM"],
            Evening: ["07:00 PM", "08:30 PM"],
          },
        },
      ],
    },
    {
      name: "Dr. Ramesh Mahajan",
      specialty: "Cancer Specialist",
      experience: "10 years experience overall",
      location: "Parel, Mumbai",
      hospital: "Smilescancer Center for Advanced Cancer",
      consultationFee: "Consultation fee at clinic",
      rating: "99%",
      patientStories: "98 Patient Stories",
      drImage: doctorlist_image,
      availableDates: [
        {
          date: "Today",
          slotsAvailable: 8,
          timeSlots: {
            Morning: ["10:00 AM"],
            Afternoon: ["01:00 PM", "02:30 PM"],
            Evening: ["06:30 PM", "07:30 PM"],
          },
        },
        {
          date: "Tomorrow",
          slotsAvailable: 15,
          timeSlots: {
            Morning: ["09:30 AM", "10:30 AM"],
            Afternoon: ["12:00 PM", "03:00 PM"],
            Evening: ["07:00 PM", "08:00 PM"],
          },
        },
      ],
    },
    {
      name: "Dr. Partik Cotrez",
      specialty: "Cancer Specialist",
      experience: "10 years experience overall",
      location: "Parel, Mumbai",
      hospital: "Smilescancer Center for Advanced Cancer",
      consultationFee: "Consultation fee at clinic",
      rating: "99%",
      patientStories: "98 Patient Stories",
      drImage: doctorlist_image,
      availableDates: [
        {
          date: "Today",
          slotsAvailable: 9,
          timeSlots: {
            Morning: ["09:30 AM", "10:30 AM"],
            Afternoon: ["01:00 PM", "02:00 PM", "03:30 PM"],
            Evening: ["06:30 PM", "07:30 PM"],
          },
        },
        {
          date: "Tomorrow",
          slotsAvailable: 13,
          timeSlots: {
            Morning: ["08:30 AM", "09:30 AM"],
            Afternoon: ["12:30 PM", "02:00 PM", "03:00 PM"],
            Evening: ["06:00 PM", "08:00 PM"],
          },
        },
      ],
    },
    {
      name: "Dr. Naresh Trahen",
      specialty: "Cancer Specialist",
      experience: "10 years experience overall",
      location: "Parel, Mumbai",
      hospital: "Smilescancer Center for Advanced Cancer",
      consultationFee: "Consultation fee at clinic",
      rating: "99%",
      patientStories: "98 Patient Stories",
      drImage: doctorlist_image,
      availableDates: [
        {
          date: "Today",
          slotsAvailable: 7,
          timeSlots: {
            Morning: ["08:00 AM", "09:30 AM"],
            Afternoon: ["01:00 PM", "02:00 PM"],
            Evening: ["06:30 PM", "07:30 PM"],
          },
        },
        {
          date: "Tomorrow",
          slotsAvailable: 11,
          timeSlots: {
            Morning: ["09:00 AM", "10:00 AM"],
            Afternoon: ["12:30 PM", "03:00 PM"],
            Evening: ["07:00 PM", "08:30 PM"],
          },
        },
      ],
    },
    // {
    // name: "Dr. Archana Mahadaven",
    //   specialty: "Cancer Specialist",
    //   experience: "10 years experience overall",
    //   location: "Parel, Mumbai",
    //   hospital: "Smilescancer Center for Advanced Cancer",
    //   consultationFee: "Consultation fee at clinic",
    //   rating: "99%",
    //   patientStories: "98 Patient Stories",
    //   drImage: doctorlist_image,
    // }
  ];
  
  export default doctorData;
  
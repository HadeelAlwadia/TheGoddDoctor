
const getStartOfWeek = () => {
    const start = new Date();
    const day = start.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
    return new Date(start.setDate(diff));
};

const getAppointmentsPerDay = (appointments:any[]) => {
    const startOfWeek = getStartOfWeek();
    const appointmentsPerDay = {};

    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        const formattedDay = day.toISOString().split("T")[0]; // Format YYYY-MM-DD
        appointmentsPerDay[formattedDay] = 0;
    }

    appointments.forEach((appointment) => {
        const appointmentDate = new Date(appointment.date).toISOString().split("T")[0];
        if (appointmentsPerDay[appointmentDate] !== undefined) {
            appointmentsPerDay[appointmentDate] += 1;
        }
    });

    return appointmentsPerDay;
};

export default getAppointmentsPerDay
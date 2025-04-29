export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric',
      hour12: true 
    });
  };
  
  export const getMoistureStatusColor = (current, optimal) => {
    const diff = optimal - current;
    if (diff > 20) return "text-red-600"; 
    if (diff > 10) return "text-orange-500"; 
    if (diff < -10) return "text-blue-600"; 
    return "text-green-600"; 
  };
  
  export const getMoistureStatusBg = (status) => {
    switch(status) {
      case 'critical': return 'bg-red-100 border-red-500';
      case 'low': return 'bg-orange-100 border-orange-500';
      case 'high': return 'bg-blue-100 border-blue-500';
      default: return 'bg-green-100 border-green-500';
    }
  };
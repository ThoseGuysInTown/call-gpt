// create metadata for all the available functions to pass to completions API
const tools = [
  {
    type: 'function',
    function: {
      name: 'scheduleOnboarding',
      say: 'Let me help you schedule your onboarding call.',
      description: 'Checks available time slots and schedules an onboarding call for the caller.',
      parameters: {
        type: 'object',
        properties: {
          callerName: {
            type: 'string',
            description: 'The name of the caller to schedule onboarding for.'
          },
          preferredTime: {
            type: 'string',
            description: 'The preferred time for the onboarding call (e.g., "2025-10-01T10:00:00Z").'
          }
        },
        required: ['callerName', 'preferredTime'],
      },
      returns: {
        type: 'object',
        properties: {
          confirmedTime: {
            type: 'string',
            description: 'The confirmed time for the onboarding call.'
          },
          status: {
            type: 'string',
            description: 'Whether the onboarding call was successfully scheduled.'
          }
        }
      }
    },
  },
  {
    type: 'function',
    function: {
      name: 'transferCall',
      say: 'One moment while I transfer your call.',
      description: 'Transfers the customer to a live agent in case they request help from a real person.',
      parameters: {
        type: 'object',
        properties: {
          callSid: {
            type: 'string',
            description: 'The unique identifier for the active phone call.',
          },
        },
        required: ['callSid'],
      },
      returns: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Whether or not the customer call was successfully transfered'
          },
        }
      }
    },
  }
];

module.exports = tools;
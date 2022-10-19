import type { NextApiRequest, NextApiResponse } from 'next'

type TriggerEvent = {
  name: string,
  type: string,
  value: number,
  result: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TriggerEvent>
) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    res.status(200).json({ name: 'Trigger', type: 'Simple', value: 1, result: 'Triggered' })
  }
}

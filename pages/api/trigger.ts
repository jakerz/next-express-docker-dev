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
  let triggerJson: TriggerEvent = { name: 'Trigger', type: 'Simple', value: 1, result: 'Triggered' }
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json(triggerJson)
  } else {
    res.status(200).json(triggerJson)
  }
}

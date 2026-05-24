import siteContent from '@/data/siteContent.json'

const { feedingStations, team } = siteContent

export const siteCounts: Record<string, number> = {
  feedingStations: feedingStations.stations.length,
  foundingMembers: team.foundingMembers.length,
  advisoryBoard: team.advisoryBoard.length,
  boardMembers: team.teamMembers.length,
  totalTeam:
    1 +
    team.foundingMembers.length +
    team.advisoryBoard.length +
    team.teamMembers.length,
}

export function resolveStatNumber(stat: { number: string; source?: string }): string {
  if (!stat.source) return stat.number
  const count = siteCounts[stat.source]
  if (count == null) return stat.number
  const suffix = stat.number.replace(/^\d+/, '')
  return `${count}${suffix}`
}

export const DONATE_MODAL_EVENT = 'open-donate-modal'

export function openDonateModal() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(DONATE_MODAL_EVENT))
}

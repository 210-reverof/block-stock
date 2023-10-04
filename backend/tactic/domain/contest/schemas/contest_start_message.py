from typing import Optional


class ContestStartMessage:
    message: Optional[str] = None
    memberId: Optional[int] = None
    contestId: Optional[int] = None
    ticketCnt: Optional[list] = None

    def to_dict(self):
        return {
            "message": self.message,
            "memberId": self.memberId,
            "contestId": self.contestId,
            "ticketCnt": self.tickerCnt
        }


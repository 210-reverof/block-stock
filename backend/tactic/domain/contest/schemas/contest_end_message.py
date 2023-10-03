from typing import Optional

from domain.contest.models.contest import ContestRealTime
from datetime import datetime


class ContestEndMessage:
    message: Optional[str] = None
    contestId: Optional[int] = None
    contestTitle: Optional[str] = None
    memberIds: Optional[list] = None
    results: Optional[list] = None

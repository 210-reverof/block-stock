import json

from aiokafka import AIOKafkaConsumer, AIOKafkaProducer
import asyncio
from fastapi import APIRouter
import os.path

from domain.contest.schemas.contest_end_message import ContestEndMessage
from domain.member.services.member_service import msg_to_member, is_key_exists, save_member_data

route = APIRouter()

loop = asyncio.get_event_loop()

producer = AIOKafkaProducer("tactic-topic", loop=loop,
                            bootstrap_servers=os.environ["KAFKA_SERVER"])


async def produce():
    end_message = ContestEndMessage()
    end_message.message = "CONTEST_END"
    end_message.contestId = 7
    end_message.contestTitle = "무아무아 경진대회"
    end_message.memberIds = [10, 34, 49]
    end_message.results = [13400000, 9800000, 11200000]
    await producer.send("tactic-topic", json.dumps(end_message))


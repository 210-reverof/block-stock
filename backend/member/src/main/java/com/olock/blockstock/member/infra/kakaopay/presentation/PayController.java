package com.olock.blockstock.member.infra.kakaopay.presentation;

import com.olock.blockstock.member.infra.kakaopay.application.KakaoPayService;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoApproveResponse;
import com.olock.blockstock.member.infra.kakaopay.dto.KakaoReadyResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/member/pay")
@RequiredArgsConstructor
public class PayController {
    private final KakaoPayService kakaoPayService;

    @PostMapping
    public ResponseEntity<KakaoReadyResponse> readyToKakaoPay() {

        return ResponseEntity.ok(kakaoPayService.kakaoPayReady());
    }


    @GetMapping
    public ResponseEntity<KakaoApproveResponse> afterPayRequest(@RequestParam("pg_token") String pgToken) {

        return ResponseEntity.ok(kakaoPayService.approveResponse(pgToken));
    }
}
package com.olock.blockstock.member.domain.member.dto.request;

import lombok.Getter;

@Getter
public class MemberJoinRequest {
    private String email;
    private String password;
    private String nickname;
    private String imagePath;
}

